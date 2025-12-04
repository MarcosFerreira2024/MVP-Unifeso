import { Request, Response } from "express";
import { container } from "tsyringe";
import { DeleteOutingUseCase } from "../../application/useCases/Outing/DeleteOutingUseCase";
import { UpdateOutingUseCase } from "../../application/useCases/Outing/UpdateOutingUseCase";
import { AddTrailUseCase } from "../../application/useCases/Outing/AddTrailUseCase";
import { AddParkUseCase } from "../../application/useCases/Outing/AddParkUseCase";
import { AddEventUseCase } from "../../application/useCases/Outing/AddEventUseCase";
import { CreateTrailUseCase } from "../../application/useCases/Outing/CreateTrailUseCase";
import { CreateParkUseCase } from "../../application/useCases/Outing/CreateParkUseCase";
import { CreateEventUseCase } from "../../application/useCases/Outing/CreateEventUseCase";
import { ListOutingsUseCase } from "../../application/useCases/Outing/ListOutingsUseCase";
import { FindOutingBySlugUseCase } from "../../application/useCases/Outing/FindOutingBySlugUseCase";

class OutingController {
  async findAllOutings(req: Request, res: Response): Promise<Response> {
    const { take, page, title, category, sortBy, orderBy } = req.query as {
      take?: number;
      page?: number;
      title?: string;
      category?: string;
      sortBy?: "title" | "city";
      orderBy?: "asc" | "desc";
    };
    const listOutingsUseCase = container.resolve(ListOutingsUseCase);
    const result = await listOutingsUseCase.execute(
      take,
      page,
      title,
      category,
      sortBy,
      orderBy
    );
    return res.status(200).json(result);
  }

  async findBySlug(req: Request, res: Response): Promise<Response> {
    const { slug } = req.params;
    const findOutingBySlugUseCase = container.resolve(FindOutingBySlugUseCase);
    const outing = await findOutingBySlugUseCase.execute(slug);
    return res.status(200).json(outing);
  }

  async update(req: Request, res: Response): Promise<Response> {
    const { id } = req.params;
    const updateOutingUseCase = container.resolve(UpdateOutingUseCase);
    const updatedOuting = await updateOutingUseCase.execute(id, req.body);

    return res.status(200).json(updatedOuting);
  }

  async delete(req: Request, res: Response): Promise<Response> {
    const { id } = req.params;
    const deleteOutingUseCase = container.resolve(DeleteOutingUseCase);
    await deleteOutingUseCase.execute(id);

    return res.status(204).send();
  }

  async addTrail(req: Request, res: Response): Promise<Response> {
    const { id } = req.params;
    const addTrailUseCase = container.resolve(AddTrailUseCase);
    const updatedOuting = await addTrailUseCase.execute(id, req.body);

    return res.status(200).json(updatedOuting);
  }

  async addPark(req: Request, res: Response): Promise<Response> {
    const { id } = req.params;
    const addParkUseCase = container.resolve(AddParkUseCase);
    const updatedOuting = await addParkUseCase.execute(id, req.body);

    return res.status(200).json(updatedOuting);
  }

  async addEvent(req: Request, res: Response): Promise<Response> {
    const { id } = req.params;
    const addEventUseCase = container.resolve(AddEventUseCase);
    const updatedOuting = await addEventUseCase.execute(id, req.body);

    return res.status(200).json(updatedOuting);
  }

  async createTrail(req: Request, res: Response): Promise<Response> {
    const { trail, ...outingData } = req.body;

    console.log(req.body);

    const createTrailUseCase = container.resolve(CreateTrailUseCase);
    const outing = await createTrailUseCase.execute(outingData, trail);

    return res.status(201).json(outing);
  }

  async createPark(req: Request, res: Response): Promise<Response> {
    const { park, ...outingData } = req.body;
    const createParkUseCase = container.resolve(CreateParkUseCase);
    const outing = await createParkUseCase.execute(outingData, park);

    return res.status(201).json(outing);
  }

  async createEvent(req: Request, res: Response): Promise<Response> {
    const { event, ...outingData } = req.body;
    const createEventUseCase = container.resolve(CreateEventUseCase);
    const outing = await createEventUseCase.execute(outingData, event);

    return res.status(201).json(outing);
  }
}

export { OutingController };
