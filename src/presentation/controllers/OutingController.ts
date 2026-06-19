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
import { errorHandler } from "../../helpers/errorHandler";

class OutingController {
  async findAllOutings(req: Request, res: Response): Promise<Response> {
    try {
      const { take, page, title, category, sortBy, orderBy } = req.query as Record<string, string | undefined>;
      const listOutingsUseCase = container.resolve(ListOutingsUseCase);
      const result = await listOutingsUseCase.execute(
        take ? Number(take) : undefined,
        page ? Number(page) : undefined,
        title,
        category,
        sortBy as "title" | "city" | undefined,
        orderBy as "asc" | "desc" | undefined
      );
      return res.status(200).json(result);
    } catch (e) {
      return errorHandler(e, res);
    }
  }

  async findBySlug(req: Request, res: Response): Promise<Response> {
    try {
      const { slug } = req.params;
      const findOutingBySlugUseCase = container.resolve(FindOutingBySlugUseCase);
      const outing = await findOutingBySlugUseCase.execute(slug);
      return res.status(200).json(outing);
    } catch (e) {
      return errorHandler(e, res);
    }
  }

  async update(req: Request, res: Response): Promise<Response> {
    try {
      const { id } = req.params;
      const updateOutingUseCase = container.resolve(UpdateOutingUseCase);
      const updatedOuting = await updateOutingUseCase.execute(id, req.body);
      return res.status(200).json(updatedOuting);
    } catch (e) {
      return errorHandler(e, res);
    }
  }

  async delete(req: Request, res: Response): Promise<Response> {
    try {
      const { id } = req.params;
      const deleteOutingUseCase = container.resolve(DeleteOutingUseCase);
      await deleteOutingUseCase.execute(id);
      return res.status(204).send();
    } catch (e) {
      return errorHandler(e, res);
    }
  }

  async addTrail(req: Request, res: Response): Promise<Response> {
    try {
      const { id } = req.params;
      const addTrailUseCase = container.resolve(AddTrailUseCase);
      const updatedOuting = await addTrailUseCase.execute(id, req.body);
      return res.status(200).json(updatedOuting);
    } catch (e) {
      return errorHandler(e, res);
    }
  }

  async addPark(req: Request, res: Response): Promise<Response> {
    try {
      const { id } = req.params;
      const addParkUseCase = container.resolve(AddParkUseCase);
      const updatedOuting = await addParkUseCase.execute(id, req.body);
      return res.status(200).json(updatedOuting);
    } catch (e) {
      return errorHandler(e, res);
    }
  }

  async addEvent(req: Request, res: Response): Promise<Response> {
    try {
      const { id } = req.params;
      const addEventUseCase = container.resolve(AddEventUseCase);
      const updatedOuting = await addEventUseCase.execute(id, req.body);
      return res.status(200).json(updatedOuting);
    } catch (e) {
      return errorHandler(e, res);
    }
  }

  async createTrail(req: Request, res: Response): Promise<Response> {
    try {
      const { trail, ...outingData } = req.body;
      const createTrailUseCase = container.resolve(CreateTrailUseCase);
      const outing = await createTrailUseCase.execute(outingData, trail);
      return res.status(201).json(outing);
    } catch (e) {
      return errorHandler(e, res);
    }
  }

  async createPark(req: Request, res: Response): Promise<Response> {
    try {
      const { park, ...outingData } = req.body;
      const createParkUseCase = container.resolve(CreateParkUseCase);
      const outing = await createParkUseCase.execute(outingData, park);
      return res.status(201).json(outing);
    } catch (e) {
      return errorHandler(e, res);
    }
  }

  async createEvent(req: Request, res: Response): Promise<Response> {
    try {
      const { event, ...outingData } = req.body;
      const createEventUseCase = container.resolve(CreateEventUseCase);
      const outing = await createEventUseCase.execute(outingData, event);
      return res.status(201).json(outing);
    } catch (e) {
      return errorHandler(e, res);
    }
  }
}

export { OutingController };
