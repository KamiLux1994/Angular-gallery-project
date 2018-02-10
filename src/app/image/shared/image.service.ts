import { Injectable } from '@angular/core'

@Injectable()
export class ImageService {
    visibleImages = [];

    getImages() {
        return this.visibleImages = IMAGES.slice(0);
    }

    getImage(id: number) {
        return IMAGES.slice(0).find(image => image.id == id)
    }
}

const IMAGES = [
    { "id": 1, "caption": "View on a gate and city", "url": "assets/img/img_1.jpg" },
    { "id": 2, "caption": "Beautyfull whirlpool", "url": "assets/img/img_2.jpg" },
    { "id": 3, "caption": "Lake by the mountains", "url": "assets/img/img_3.jpg" },
    { "id": 4, "caption": "Viev from above", "url": "assets/img/img_4.jpg" },
    { "id": 5, "caption": "Canadian forest", "url": "assets/img/img_5.jpg" },
    { "id": 6, "caption": "Storm in the mountains", "url": "assets/img/img_6.jpg" },
    { "id": 7, "caption": "Asian workers", "url": "assets/img/img_7.jpg" },
    { "id": 8, "caption": "Water and sand", "url": "assets/img/img_8.jpg" },
    { "id": 9, "caption": "Sunset", "url": "assets/img/img_9.jpg" },
    { "id": 10, "caption": "Alone tree", "url": "assets/img/img_10.jpg" },
    { "id": 11, "caption": "Sky above mountains", "url": "assets/img/img_11.jpg" },
    { "id": 12, "caption": "Rock island", "url": "assets/img/img_12.jpg" },
    { "id": 13, "caption": "Paradise", "url": "assets/img/img_13.jpg" },
    { "id": 14, "caption": "Hearted coast", "url": "assets/img/img_14.jpg" },
    { "id": 15, "caption": "Navagio Beach", "url": "assets/img/img_15.jpg" },
]
