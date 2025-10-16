import { OutingFromDBWithRelations } from "../../infrastructure/types/dataBase";

interface IOutingRepository {
  findById(id: string): Promise<OutingFromDBWithRelations | null>;
}

export { IOutingRepository };