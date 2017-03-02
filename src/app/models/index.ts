export class NewColonist {
    name: string;
    age: string;
    job_id: string;
    
    constructor (name: string, age:string, job_id: string){
        this.name = name;
        this.age = age;
        this.job_id = job_id;

    }
}

export class NewEncounter {
    id: number;
    date: string;
    atype: string;
    action: string;
    colonist_id: number;
}

export interface Job {
    name: string;
    id: number;
    description: string;
}

export interface Colonist {
    name: string;
    id: number;
    age: number;
    job: Job;
}

export interface Alien {
    id: number;
    type: string;
    sumitted_by: string;
    description: string;
}

export interface Encounter {
    id: number;
    date: string;
    atype: string;
    action: string;
    colonist_id: number;
}