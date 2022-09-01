export class Customers {
    name = String;
    size = Number;
    GroupSeqNo = String;
    table = String;
    queue = String; 

    constructor(
        name = String,
        size = Number,
        GroupSeqNo = String,
        table = String,
        queue = String,
    )
    {
        this.name = name;
        this.size = size;
        this.GroupSeqNo = GroupSeqNo;
        this.table = table;
        this.queue = queue;
    }
}