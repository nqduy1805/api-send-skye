var reverseKGroup = function(head, k) {
    let ar="",dem=0;
    while(head){
        dem++;
        ar+=head.val;
        if(dem==k){
            if(head.next)
                ar+=",";
            dem=0;
        }else{
            if(head.next)
                ar+='.';
        }
        head=head.next;
    }
    ar = ar.split(',');
    let l=[],c1=[];
    for(let i = 0 ; i< ar.length ; i++){
        c1= ar[i].split(".");

        if(c1.length == k )
            l.push(...c1.reverse())
        else
            l.push(...c1);
    }
 
    let head1 = new ListNode();
    head1.val=l[0];
    let c = head1;
    for(let i = 1 ; i < l.length ; i++){
        let cu = new ListNode();
        cu.val = l[i];
        c.next = cu;
        c=c.next;
    }
    return head1;
};