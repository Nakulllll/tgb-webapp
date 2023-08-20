export interface UserData {
    firstName: string;
    lastName: string;
    email: string;
    phone: string;
    linkedin: string;
    title: string;
    company: string;
    organization: string;
    experience: string;
    specialization: string;
    photo: File | null;
    additionalInfo: string;
    picturePreview: string | null;
}