
import fs from 'fs';
import path from 'path';
import type { NextApiRequest, NextApiResponse } from 'next';

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


const getGoogleApiKey = (): string => {
  const propsPath = path.join(process.cwd(), 'config', 'app.properties');
  const propsContent = fs.readFileSync(propsPath, 'utf-8');
  const keyMatch = propsContent.match(/google\.key\s*=\s*(.+)/);
  return keyMatch ? keyMatch[1].trim() : "";
};


const fetchBookDetails = async (title: string, apiKey: string) => {
  const normalized = decodeURIComponent(title.replace(/\+/g, ' '));
  const query = encodeURIComponent(normalized);
  const url = `https://www.googleapis.com/books/v1/volumes?q=${query}&langRestrict=vi&key=${apiKey}`;

  writeLog("📘 Google API request:", url);

  try {
    const res = await fetch(url);
    const data = await res.json();

    console.log(" GOOGLE search:" + data);

    writeLog("📘 Google API response for:", normalized);
    console.dir(data, { depth: 3 });

    const info = data.items?.[0]?.volumeInfo;
    if (!info) return null;

    return {
      title: info.title,
      authors: info.authors || [],
      description: info.description || "",
      thumbnail: info.imageLinks?.thumbnail || "",
      publishedDate: info.publishedDate || ""
    };
  } catch (err) {
    writeLog("ERROR: " + "❌ Lỗi khi gọi Google Books API:" + err);
    return null;
  } 
};

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method !== "POST") return res.status(405).json({ error: "Method Not Allowed" });

  const { books } = req.body;
  if (!Array.isArray(books)) return res.status(400).json({ error: "Danh sách sách không hợp lệ." });

  const apiKey = getGoogleApiKey();
  const results = [];

  for (const book of books) {
    const detail = await fetchBookDetails(book.ten_sach, apiKey);
    if (detail) results.push({ ...book, ...detail });
  }

  res.status(200).json({ books: results });
}
