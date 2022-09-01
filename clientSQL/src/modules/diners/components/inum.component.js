export const Status = (queue) => {
    // console.log("GroupSeqNo", queue)
    if (queue === "tobesited") {
        return (
            "ממתין לשולחן"
        )
    }
    if (queue === "sit") {
        return (
            "ממתין לשירות"
        )
    }
    if (queue === "awaitingbill") {
        return (
            "ממתין לחשבון"
        )
    }
}

export const responsServerFun = (responsServer) => {
    if (responsServer === "No place to sit for any group") {
        return (
            " לא נמצא שולחן פנוי"
        )
    }
    else {
        return (
            <>
                <div>
                    `נמצא שולחן id: {responsServer[2]}`
                </div>
                <div>
                    `לקבוצה: {responsServer[0]}`
                </div>
                <div>
                    `שהגיעה בשעה: {responsServer[1]}`
                </div>
            </>
        )
    }
}