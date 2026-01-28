export function getCatApiKey(): string {
    const key = process.env.CAT_API_KEY;
    if (!key) {
        throw new Error('環境変数CAT_API_KEYが設定されていません');
    }
    return key;
}
