const express=require('express')
const router=express.Router()
const {
    loginVerification, loginApproval,GetBranchdetails,verifyEmailId,verifyEmailIdWithApproved,
    Loginuser
}=require('../../Controller/Login/LoginController')



router.post('/LoginUser',Loginuser)

module.exports=router