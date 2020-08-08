const express = require('express');
const uuid = require('uuid');
const router = express.Router();
const members = require('../../Members');

//Gets all members
router.get('/', (request, response) => 
{
    response.json(members);
});

//Get a single member
router.get('/:id', (request, response) => 
{
    const found = members.some(member => member.id === parseInt(request.params.id));

    if(found)
    {
        response.json(members.filter(member => member.id === parseInt(request.params.id)));
    }
    else
    {
        response.status(400).json({msg: `No member with id of ${request.params.id}`});
    }
});

// Create Member
router.post('/', (request, response) => 
{
    console.log('Console log -> router.post()');

    const new_member = 
    {
        id: uuid.v4(),
        name: request.body.name,
        email: request.body.email,
        status: 'active'
    }

    if(new_member.name == false || new_member.email == false)
    {
        console.log('Console log -> Please include a name and email');

        return response.status(400).json(
        {
            msg: 'Please include a name and email'
        });   
    }

    members.push(new_member);
    response.json(members);
    // response.redirect('/');
});

//Update member
router.put('/:id', (request, response) => 
{
    const found = members.some(member => member.id === parseInt(request.params.id));

    console.log('WE ARE HERE!');

    if(found)
    {
        const update_member = request.body;
        
        members.forEach(member =>
        {
            if(member.id === parseInt(request.params.id))
            {
                // member.name = update_member.name ? update_member.name : member.name;
                // member.email = update_member.email ? update_member.email : member.email;

                if(update_member.name == true) member.name = update_member.name;
                
                if(update_member.email == true) member.email = update_member.email;

                response.json({ msg: 'Member updated', member });
            }    
        });
    }
    else
    {
        response.status(400).json({msg: `No member with id of ${request.params.id}`});
    }
});

//Delete member
router.delete('/:id', (request, response) => 
{
    const found = members.some(member => member.id === parseInt(request.params.id));

    if(found)
    {
        response.json(
        {   msg: 'Member deleted',
            members: members.filter(member => member.id !== parseInt(request.params.id))
        });
    }
    else
    {
        response.status(400).json({msg: `No member with id of ${request.params.id}`});
    }
});

module.exports = router;