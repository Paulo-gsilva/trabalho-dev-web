using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using freeacademy.Models;
using freeacademy.Data;
using System.Security.Cryptography;
// For more information on enabling Web API for empty projects, visit https://go.microsoft.com/fwlink/?LinkID=397860

namespace freeacademy.Controllers
{
    [Route("UserStudents")]
    public class StudentController : Controller
    {
        private readonly DataContext _appDbDataContext;

        public StudentController(DataContext appDbContext)
        {
            _appDbDataContext = appDbContext;
        }

        [HttpPost]
        [Route("Create")]
        public async Task<ActionResult<userStudent>> NewuserStudent(userStudent userStudent)
        {

            try
            {
                userStudent.PASSWORD = Encrypt(userStudent.PASSWORD);
                _appDbDataContext.Add(userStudent);

                await _appDbDataContext.SaveChangesAsync();

                return Ok(new { succes = true, data = "Usuário criado com sucesso" });
            }
            catch(Exception ex)
            {
                throw new Exception(ex.Message, ex.InnerException);
            }

        }

        [HttpGet]
        [Route("LoginUserStudent")]
        public async Task<ActionResult<userStudent>> GetUserToLogin(string userName, string password)
        {
            password = Encrypt(password);
            userStudent user = new userStudent();
            userStudent loginUser = new userStudent();

            user.NAME = userName;
            user.PASSWORD = password;
            loginUser = await _appDbDataContext.userStudent.FirstOrDefaultAsync(u => u.NAME == user.NAME);

            if (loginUser.PASSWORD == user.PASSWORD)
            {
                return Ok(new { success = true, data = "Usuário logado com sucesso" });
            }
            else
            {
                return Ok(new { success = false, data = "Login ou senha incorretos" });
            }
        }




        public static string Encrypt(string Password)
        {
            try
            {
                string ToReturn;
                string publickey = "12345678";
                string secretkey = "87654321";
                byte[] secretkeyByte = { };
                secretkeyByte = System.Text.Encoding.UTF8.GetBytes(secretkey);
                byte[] publickeybyte = { };
                publickeybyte = System.Text.Encoding.UTF8.GetBytes(publickey);
                MemoryStream ms = null;
                CryptoStream cs = null;
                byte[] inputbyteArray = System.Text.Encoding.UTF8.GetBytes(Password);
                using (DESCryptoServiceProvider des = new DESCryptoServiceProvider())
                {
                    ms = new MemoryStream();
                    cs = new CryptoStream(ms, des.CreateEncryptor(publickeybyte, secretkeyByte), CryptoStreamMode.Write);
                    cs.Write(inputbyteArray, 0, inputbyteArray.Length);
                    cs.FlushFinalBlock();
                    ToReturn = Convert.ToBase64String(ms.ToArray());
                }
                return ToReturn;
            }
            catch (Exception ex)
            {
                throw new Exception(ex.Message, ex.InnerException);
            }
        }
    }
}

