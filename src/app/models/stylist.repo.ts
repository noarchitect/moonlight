import {Stylist} from "./stylist";

export class StylistRepo {
    private stylists: Stylist[];

    constructor() {
        this.stylists=[
            {id: 1, title: "Oribe Canales", text: "Professional Stylist", description: "Oribe Canales, a renowned hairstylist, possesses 30 years of unrivaled experience, making him a true icon in the field. With exceptional talent and innovation, Oribe's artistry sets new standards, captivating clients worldwide. His visionary approach and commitment to excellence have solidified his position as a leader in the industry, inspiring countless professionals along the way.", imageUrl: "1.jpg", phoneUrl: "1.png", number: "123-456-789", instagramUrl: "2.png", instagram: "oribecanales", posts:[]},
            {id: 2, title: "Danny Garrity", text: "Stylist", description: "Danny Garrity is an experienced hairstylist known for his exceptional talent and dedication. With years of industry experience, Danny has honed his skills and mastered a wide range of techniques. His artistic vision and attention to detail allow him to create stunning hairstyles that perfectly complement his clients' features and personalities. Clients trust Danny for his professionalism, creativity, and ability to exceed expectations.", imageUrl: "2.jpg", phoneUrl: "1.png", number: "123-456-789", instagramUrl: "2.png", instagram: "dannygarrity", posts:[]},
            {id: 3, title: "Clint Wilson", text: "Stylist", description: "Clint Wilson is a highly skilled and versatile hairstylist with a flair for creativity. With his meticulous attention to detail, he crafts unique hairstyles that perfectly suit his clients' preferences. Clint's dedication to ongoing education keeps him up-to-date with the latest trends, allowing him to provide exceptional and on-trend looks for every client.", imageUrl: "3.jpg", phoneUrl: "1.png", number: "123-456-789", instagramUrl: "2.png", instagram: "clintwilson", posts:[]}  
        ];
        this.initializePosts();
    }
    
    private initializePosts() {
        this.stylists[0].posts = [
            { image: "../../assets/stylists/oribe/1.png", video: "" },
            { image: "", video: "../../assets/stylists/oribe/cut.mp4" },
            { image: "../../assets/stylists/danny/1.jpg", video: "" },
            { image: "../../assets/stylists/danny/1.jpg", video: "" },
            { image: "../../assets/stylists/danny/1.jpg", video: "" },
            { image: "../../assets/stylists/danny/1.jpg", video: "" },
            { image: "../../assets/stylists/danny/1.jpg", video: "" }
        ];
        this.stylists[1].posts = [
            { image: "../../assets/stylists/danny/1.jpg", video: "" },
            { image: "../../assets/stylists/danny/1.jpg", video: "" },
            { image: "../../assets/stylists/danny/1.jpg", video: "" }
        ];
        this.stylists[2].posts = [
            { image: "", video: "../../assets/stylists/clint/cut.mp4" },
            { image: "", video: "../../assets/stylists/clint/cut.mp4" },
            { image: "", video: "../../assets/stylists/clint/cut.mp4" }
        ];
    } 

    getStylists(): Stylist[] {
        return this.stylists;
    }

    getStylistByID(id: number): Stylist {
        return this.stylists.find(i => i.id == id);
    }
}