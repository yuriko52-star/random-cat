'use client';
import { useState } from 'react';
import { fetchImage } from './fetch-image';
import styles from "./page.module.css";
import Image from "next/image";

type CatImageProps = {
    url: string;
};

export function CatImage({ url }: CatImageProps) {
    const [imageUrl, setImageUrl] = useState<string>(url);

    const refreshImage = async () => {
        setImageUrl("");
        const image = await fetchImage();
        setImageUrl(image.url);
    };

    return (
      <div className={styles.page}>
        <button onClick={refreshImage} className={styles.button}>
          他のにゃんこも見る
        </button>
        <div className={styles.frame}>
          {imageUrl && (
                    <Image src={imageUrl} className={styles.img} alt="猫の画像"
                    fill
                    sizes="(max-width:768px) 100vw, 400px"/>
          )}
        </div>
      </div>
    );
}