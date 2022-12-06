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
    [Route("UserTeatcher")]
    public class TeatcherController : Controller
    {
        private readonly DataContext _appDbContext;

        public TeatcherController(DataContext appDbContext)
        {
            _appDbContext = appDbContext;
        }

        [HttpPost]
        [Route("Create")]
        public async Task<ActionResult<userStudent>> NewuserTeatcher(userTeatcher userTeatcher)
        {

            try
            {
                userTeatcher.PASSWORD = Encrypt(userTeatcher.PASSWORD);
                _appDbContext.Add(userTeatcher);

                await _appDbContext.SaveChangesAsync();

                return Ok(new { succes = true, data = "Usuário criado com sucesso" });
            }
            catch(Exception ex)
            {
                throw new Exception(ex.Message, ex.InnerException);
            }

        }

        [HttpGet]
        [Route("LoginUserTeatcher")]
        public async Task<ActionResult<userStudent>> GetUserTeatcherToLogin(string userName, string password)
        {
            password = EncryptPassword(password);
            userTeatcher user = new userTeatcher();
            userTeatcher loginUser = new userTeatcher();

            user.NAME = userName;
            user.PASSWORD = password;
            loginUser = await _appDbContext.userTeatcher.FirstOrDefaultAsync(u => u.NAME == user.NAME);

            if (loginUser.PASSWORD == user.PASSWORD)
            {
                return Ok(new { success = true, data = "Usuário logado com sucesso" });
            }
            else
            {
                return Ok(new { success = false, data = "Login ou senha incorretos" });
            }
        }




        public static string EncryptPassword(string Password)
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

