import {Hairdresser} from "./hairdresser";

export class HairdresserRepo {
    private hairdressers: Hairdresser[];

    constructor() {
        this.hairdressers=[
            {id: 1, title: "Oribe Canales", text: "Professional Hairdresser", description: "Oribe Canales, a renowned hairstylist, possesses 30 years of unrivaled experience, making him a true icon in the field. With exceptional talent and innovation, Oribe's artistry sets new standards, captivating clients worldwide. His visionary approach and commitment to excellence have solidified his position as a leader in the industry, inspiring countless professionals along the way.", imageUrl: "1.jpg", phoneUrl: "1.png", number: "123-456-789", instagramUrl: "2.png", instagram: "oribecanales"},
            {id: 1, title: "Danny Garrity", text: "Hairdresser", description: "Danny Garrity is an experienced hairstylist known for his exceptional talent and dedication. With years of industry experience, Danny has honed his skills and mastered a wide range of techniques. His artistic vision and attention to detail allow him to create stunning hairstyles that perfectly complement his clients' features and personalities. Clients trust Danny for his professionalism, creativity, and ability to exceed expectations.", imageUrl: "2.jpg", phoneUrl: "1.png", number: "123-456-789", instagramUrl: "2.png", instagram: "dannygarrity"},
            {id: 1, title: "Clint Wilson", text: "Hairdresser", description: "Clint Wilson is a highly skilled and versatile hairstylist with a flair for creativity. With his meticulous attention to detail, he crafts unique hairstyles that perfectly suit his clients' preferences. Clint's dedication to ongoing education keeps him up-to-date with the latest trends, allowing him to provide exceptional and on-trend looks for every client.", imageUrl: "3.jpg", phoneUrl: "1.png", number: "123-456-789", instagramUrl: "2.png", instagram: "clintwilson"}
        ];
    }

    getHairdressers(): Hairdresser[] {
        return this.hairdressers;
    }
    getHairdresserByID(id: number): Hairdresser {
        return this.hairdressers.find(i=>i.id==id);
    }
}