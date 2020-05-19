import { v4 as uuidv4 } from 'uuid';

export class Generator {
    public static GetRandomString(): string {
        const id = uuidv4().toString();
        return id.replace("-","");
    }
}
