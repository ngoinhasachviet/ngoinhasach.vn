
import fs from 'fs';
import path from 'path';
function writeLog(message) {
  try {
    const logDir = path.join(process.cwd(), 'log');
    if (!fs.existsSync(logDir)) fs.mkdirSync(logDir);
    const logPath = path.join(logDir, 'app.log');
    const timestamp = new Date().toISOString();
    fs.appendFileSync(logPath, `[${timestamp}] ${message}\n`, 'utf-8');
  } catch (err) {
    // fallback nếu lỗi ghi log
  }
}


export default async function handler(req, res) {
  if (req.method !== "POST") return res.status(405).json({ error: "Method Not Allowed" });

  try {
    const propsPath = path.join(process.cwd(), 'config', 'app.properties');
    const propsContent = fs.readFileSync(propsPath, "utf-8");
    const gptKey = (propsContent.match(/gpt\.key\s*=\s*(.+)/)?.[1] || "").trim();

    if (!gptKey) {
      writeLog("ERROR: " + "❌ GPT key không tìm thấy trong app.properties");
      return res.status(500).json({ error: "Không tìm thấy GPT key trong config." });
    }

    const { prompt } = req.body;

    if (!prompt || typeof prompt !== "string") {
      writeLog("ERROR: " + "❌ Prompt không hợp lệ:", prompt);
      return res.status(400).json({ error: "Prompt không hợp lệ." });
    }

    const apiURL = "https://api.openai.com/v1/chat/completions";
    const payload = {
      model: "gpt-3.5-turbo",
      messages: [{ role: "user", content: prompt }],
      max_tokens: 256,
      temperature: 0.3,
    };
    writeLog("\n");
    writeLog("✅ GỌI GPT API.........................................................");
    writeLog("🔑 KEY (ẩn):" + gptKey.slice(0, 10) + "...");
    writeLog("🌐 URL:"+ apiURL);
    writeLog("📤 PROMPT:"+ prompt);
    writeLog("📦 PAYLOAD:"+ JSON.stringify(payload, null, 2));

    const apiRes = await fetch(apiURL, {
      method: "POST",
      headers: {
        Authorization: `Bearer ${gptKey}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify(payload),
    });

    const data = await apiRes.json();
    writeLog("✅ KẾT QUẢ:"+ JSON.stringify(data, null, 2));

    const answer = data.choices?.[0]?.message?.content || "(Không có phản hồi từ ChatGPT)";
    res.status(200).json({ answer, prompt, payload });
  } catch (err) {
    writeLog("ERROR: " + "🔥 Lỗi gọi GPT:", err);
    res.status(500).json({ error: "Lỗi server khi gọi GPT hoặc đọc file key." });
  }
}
