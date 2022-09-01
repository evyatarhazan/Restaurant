export class Tables {
    name = String;
    GroupSeqNum = String; 
    capacity = String;

    constructor(
        name = String,
        GroupSeqNum = String,
        capacity = String,
    )
    {
        this.name = name;
        this.GroupSeqNum = GroupSeqNum;
        this.capacity = capacity;
    }
}