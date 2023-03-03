import { Model,Schema } from "mongoose";
declare class CrudOperations {
    private dbModel;
    constructor(dbModel: Model<any>);
    save(obj: Record<string, any>): any;
    insertOrUpdate(query: any, document: Record<string, any>): any;
    insertManyDocuments(docs: any[], options: {
        ordered: boolean;
        rawResult: boolean;
    }): Promise<any>;
    updateManyDocuments(query: any, docs: any[], options: any): any;
    /**
     * @method - Get one document
     * @param query - Query for the mongo documents.
     * @param projections - Feilds to be included in the result.
     */
    getDocument(query: any, projections: any): any;
    getDocumentById(id: any, projections: any): any;
    /**
     * @method: Gets all the documents in a paginated way.
     * @param query: The regualr mongo query
     * @param options: limit and pageno to set the offset and limit on the result count.
     */
    getAllDocuments(query: any, projections: any, options: {
        pageNo: number;
        limit: number;
    }, sort?: any): any;
    countAllDocuments(query: any): any;
    /**
     * Only to be used for the seeding the admins into the system.
     * @param doc
     *
     */
    createAndUpdateDocumentByEmail(doc: any): any;
    upsertWithUpdateQuery(query: any, updateQuery: any): any;
    upsertWithReturnDocuments(query: any, updateObj: any): any;
    updateDocument(query: any, doc: any): any;
    updateOneDocument(query: any, doc: any): any;
    updateAllDocuments(query: any, doc: any): any;
    updateSubDocument(query: any, doc: any, options: any): any;
    deleteDocument(query: any): any;
    deleteAllDocuments(query: any): any;
    getSchema(): Schema;
}
export default CrudOperations;
