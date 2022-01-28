// local models
import { mcq_type } from './mcq_question';

export interface cat_type {
    categoryname: string,
    questions: Array<mcq_type>
};