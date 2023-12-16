export declare abstract class CrudService<DTO, CreateDto, QueryDTO extends {
    skip?: number;
    limit?: number;
    populate?: string[];
}, UpdateDto> {
    private readonly model;
    private dtoClass;
    protected constructor(model: any, dtoClass: new (...args: any[]) => DTO);
    create(createArticleDto: CreateDto): Promise<DTO>;
    find(queryDto: QueryDTO): Promise<DTO[]>;
    findById(_id: string): Promise<DTO>;
    findOne(queryDto: QueryDTO): Promise<DTO>;
    update(_id: string, payload: UpdateDto): Promise<DTO>;
    delete(_id: string): Promise<{
        success: boolean;
    }>;
}
