'use server';
import { getCatApiKey } from "./env";

type Image = {
    url: string;
};


export async function fetchImage(): Promise<Image> {
    const apiKey = getCatApiKey();
    const res = await fetch("https://api.thecatapi.com/v1/images/search", {
        headers: { "x-api-key": apiKey },
        cache: 'no-store',
    }
    );
    const images = await res.json();
    // console.log('fetchImage:画像情報を取得しました', images);
    return images[0];
}