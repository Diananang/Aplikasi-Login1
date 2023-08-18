/*
 * Catatan:
 * Gunakan fungsi goToHome() untuk menampilkan halaman home
 * Gunakan fungsi goToLogin() untuk menampilkan halaman login
 * Gunakan fungsi showPopUp() untuk menampilkan pop up error
 */

/**@Module Login-Script*/
/**
* Membuaat variabel loginFormElement untuk tampilan form.
* @condtant {HTMLElement}
*/
const loginFormElement = document.querySelector('#loginForm');

/**
*Membuat variabel inputEmailElement untuk tampilan input email.
*@constant {HTMLElement}
*/
const inputEmailElement = document.querySelector('#inputEmail');

/** 
* Membuat variabel inputPasswordElement untuk tampilan input password.
* @constant {HTMLElement}
*/
const inputPasswordElement = document.querySelector('#inputPassword');

/** 
 * Membuat variabel expectedEmail untuk menyimpan informasi email sementara.
 * @constant {string}
 */
const expectedEmail = 'admin@dicoding.com';
/** 
 * Membuat variabel expectedPassword untuk menyimpan informasi password sementara.
 * @constant {string}
 */
const expectedPassword = 'superpassword';

/*Menambahkan aksi klik pada button*/
loginFormElement.addEventListener('submit', function(event) {
  event.preventDefault();

  /*membuat variabel email untuk menyimpan nilai emai yang didapatkan saat button ditekan.
  *@constant {string}
  */
  const email = inputEmailElement.value;

  /** 
   * Membuat variabel password untuk menyimpan niali password yang didapatkan saat button ditekan.
   * @constant {string}
   */
  const password = inputPasswordElement.value;

  /* Comment : Memastikan bahwa nilai email dan password sesuai dengan nilai yang tersimpan. */
  if (email == expectedEmail && password == expectedPassword) {
    //jika sesuai maka program akan pindah ke halaman home
    goToHome();
    //jika tidak sesuai maka program akan menampilkan notifikasi input salah
  } else {
    showPopUp();
  }
});
