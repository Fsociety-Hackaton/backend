import { CreateTestDeployDto } from "./dto/test-deploy.dto";
import { Model } from "mongoose";
import { TestDeploy } from './interfaces/test-deploy.interface';
export declare class TestDeployController {
    private readonly TestDeploy;
    constructor(TestDeploy: Model<TestDeploy>);
    find(): Promise<TestDeploy[]>;
    create(createTestDeployDto: CreateTestDeployDto): Promise<TestDeploy>;
}
