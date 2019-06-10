// collapse contacts to see code area more easily
const contacts = {
    contact_01: {
        FirstName: 'Joe',
        LastName: 'Blow',
        Status: 'Friend'
    },
    contact_02: {
        FirstName: 'Jessie',
        LastName: 'James',
        Status: 'Relative'
    },
    contact_03: {
        FirstName: 'Annie',
        LastName: 'Oakley',
        Status: 'Relative'
    },
    contact_04: {
        FirstName: 'Mary',
        LastName: 'Berry',
        Status: 'Friend'
    },
    contact_05: {
        FirstName: 'Taylor',
        LastName: 'Mailer',
        Status: 'Friend'
    },
    contact_06: {
        FirstName: 'Hector',
        LastName: 'Selector',
        Status: 'Friend'
    }

};


function allMyFriends() {
    // no parameter necessary since contacts is already hardcoded in the file
    let friends = [];
    for (let key in contacts) {
        let contact = contacts[key];
        // only push friends to result array
        if (contact.Status === 'Friend') {
            // push first and last name as string
            friends.push(`${contact.FirstName} ${contact.LastName}`);
        }
    }

    return friends;
}