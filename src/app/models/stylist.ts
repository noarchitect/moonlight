

export interface Stylist {
    id: number;
    title: string;
    text: string;
    description: string;
    imageUrl: string;
    phoneUrl: string;
    number: string;
    instagramUrl: string;
    instagram: string;
    posts: Media[];
}

export class Media {
    image: string;
    video: string;
  }
