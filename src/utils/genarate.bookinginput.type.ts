export type bookinginput={
    userid:number,
    hotelid:number,
    bookingAmount:number,
    status:bookstatus
}
enum bookstatus{
    pending,
    comfirmed,
    cencelled
}