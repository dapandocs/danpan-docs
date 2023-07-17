import request from "@docs/utils/request";

const prefex = "/api";

/**
 * 获取所有的sitemap url列表
 * @returns
 */
export async function querySitemapUrlList() {
  return request(`${prefex}/sitemap.json`);
}

/**
 * bing批量提交
 * @returns
 */
export async function queryBingBatchCommit(data: {
  host: string;
  key: string;
  keyLocation: string;
  urlList: React.Key[];
}) {
  return request(`/bing-api/indexnow`, {
    method: "POST",
    data,
    headers: {
      "Content-Type": "application/json; charset=utf-8",
    },
  });
}

/**
 * bing批量提交 -- vercel
 * @returns
 */
export async function queryBingBatchVercelCommit(data: {
  host: string;
  key: string;
  keyLocation: string;
  urlList: React.Key[];
}) {
  return request(`/bing-api/indexnow`, {
    method: "POST",
    data,
    headers: {
      "Content-Type": "application/json; charset=utf-8",
    },
  });
}
