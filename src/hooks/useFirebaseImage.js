//Imports
//React
import { useEffect, useState } from "react";
//FireBase
import { getDownloadURL, ref } from "@firebase/storage";
import { storage } from "../firebase/firebase";

export const useFirebaseImage = (imageUrl) => {
  const [image, setImage] = useState("/emtyImage.jpg");

  useEffect(() => {
    if (!imageUrl) {
      return;
    }

    const cargarImagen = async () => {
      try {
        const image = await getDownloadURL(ref(storage, imageUrl));
        setImage(image);
      } catch (err) {
        console.log(err);
      }
    };
    cargarImagen();
  }, [imageUrl]);

  return image;
};
