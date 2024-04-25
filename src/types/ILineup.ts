export interface ILineup {
    id: number;
    images: string;
    model: string;
    praise: string;
    price: number;
    camera: ICamera;
    battery: IBattery;
    processor: IProc;
}
interface IProc {
    icon: string
    name: string
}
interface ICamera {
    icon: string
    text: string
}
interface IBattery {
    icon: string
    text: string
}
