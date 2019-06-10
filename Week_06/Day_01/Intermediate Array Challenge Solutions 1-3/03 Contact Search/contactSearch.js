function contactSearch(fn,ln){
    for(let key in contactList){
        let contact = contactList[key];
        if(contact.firstName === fn && contact.lastName === ln){
            return contact;
        }
    }
    return 'no contact found';
}