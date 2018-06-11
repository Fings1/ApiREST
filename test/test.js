var chai = require('chai');
var chaiHttp = require('chai-http');
var expect = require('chai').expect;

chai.use(chaiHttp);

//PORT  where app is running
const URL = 'http://localhost:3000';

//Test for insert a user
describe('Insert a user ', () =>{
    it('Should insert a user', (done) =>{
        chai.request(URL)
            .post('/users')
            .send({
                name: 'Test Name',
                last_name: 'Test last name',
                address: 'Test address',
                city: 'Test city',
                state: 'Test state',
                country: 'Test country',
                phone: 'Test phone',
                area_code: 'Test area code',
                birthdate: '2018-06-05'
            })
            .end((err, res) =>{
                console.log(res.body);
                expect(res).to.have.status(201);
                done();
            });
    });
});

//Test for get all users
describe('Get all users ', () =>{
    it('Should get all users', (done) =>{
        chai.request(URL)
            .get('/users')
            .end((err, res) =>{
                console.log(res.body);
                expect(res).to.have.status(200);
                done();
            });
    });
});

//Test for get user by id
describe('Get user by id ', () =>{
    it('Should get user by id' ,(done) =>{
        chai.request(URL)
            .get('/users/2')
            .end((err, res) =>{
                console.log(res.body);
                expect(res).to.have.status(200);
                done();
            });
    });
});

//Test for not find user by id
describe('User not found by id ', () =>{
    it('Should show user does not exist', (done) =>{
        chai.request(URL)
            .get('/users/345')
            .end((err, res) =>{
                console.log(res.body);
                expect(res).to.have.status(404);
                done();
            });
    });
});

//Test for update user by id
describe('Update user by id ', () =>{
    it('Should update user by id and show message user updated ', (done) =>{
        chai.request(URL)
            .put('/users/2')
            .send({
                name: 'Test Name updated',
                last_name: 'Test last name updated',
                address: 'Test address updated',
                city: 'Test city updated',
                state: 'Test state updated',
                country: 'Test country updated',
                phone: 'Test phone updated',
                area_code: 'Test area code updated',
                birthdate: '2018-07-05'
            })
            .end((err, res) =>{
                console.log(res.body);
                expect(res).to.have.status(200);
                done();
            });
    });
});

//Test for delete user by id
describe('Delete user by id', () =>{
    it('Should delete user and show message user deleted', (done) =>{
        chai.request(URL)
            .delete('/users/1')
            .end((err, res) =>{
                console.log(res.body);
                expect(res).to.have.status(200);
                done();
            });
    });
});
