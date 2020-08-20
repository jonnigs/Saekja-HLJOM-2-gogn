document.addEventListener("DOMContentLoaded", () => {
  const loginForm = document.querySelector(".login");
  const villa = document.querySelector(".villa");
  const download = document.querySelector(".download");
  const logoutButton = document.querySelector(".logoutButton");

  // Listen for auth status change
  auth.onAuthStateChanged((user) => {
    if (!user) {
      loginForm.classList.remove("hide");
      download.classList.add("hide");
      logoutButton.classList.add("hide");
    } else {
      loginForm.classList.add("hide");
      download.classList.remove("hide");
      logoutButton.classList.remove("hide");
    }
  });

  document;
  loginForm.addEventListener("submit", (e) => {
    e.preventDefault();
    login(loginForm["email"].value, loginForm["password"].value);
  });

  document;
  logoutButton.addEventListener("click", (e) => {
    logout();
  });

  document;
  download.addEventListener("click", (e) => {
    db.collection("prof2")
      .get()
      .then((prof) => {
        prof.docs.forEach((doc) => {
          //console.log(doc.data().nafn);
        });
      });

    let data = [];
    db.collection("prof2")
      .get()
      .then((prof) => {
        prof.docs.forEach((doc) => {
          const d = doc.data();
          const row = [
            d.nafn,
            d.kt,
            d.kyn,
            d.dagagamall,
            d.aldursbil,
            d.rim1,
            d.rim2,
            d.rim3,
            d.rim4,
            d.rim5,
            d.rim6,
            d.rim7,
            d.rim8,
            d.rim9,
            d.rim10,
            d.rim11,
            d.rim12,
            d.rimTotal,
            d.samstofur1,
            d.samstofur2,
            d.samstofur3,
            d.samstofur4,
            d.samstofur5,
            d.samstofur6,
            d.samstofur7,
            d.samstofur8,
            d.samstofurTotal,
            d.samsett1,
            d.samsett2,
            d.samsett3,
            d.samsett4,
            d.samsett5,
            d.samsett6,
            d.samsett7,
            d.samsett8,
            d.samsett9,
            d.samsett10,
            d.samsett1rangt,
            d.samsett2rangt,
            d.samsett3rangt,
            d.samsett4rangt,
            d.samsett5rangt,
            d.samsett6rangt,
            d.samsett7rangt,
            d.samsett8rangt,
            d.samsett9rangt,
            d.samsett10rangt,
            d.samsettTotal,
            d.hljodgreining1,
            d.hljodgreining2,
            d.hljodgreining3,
            d.hljodgreining4,
            d.hljodgreining5,
            d.hljodgreining6,
            d.hljodgreining7,
            d.hljodgreining8,
            d.hljodgreining9,
            d.hljodgreining10,
            d.hljodgreining11,
            d.hljodgreining12,
            d.hljodgreining13,
            d.hljodgreining14,
            d.hljodgreining15,
            d.hljodgreiningTotal,
            d.margraed11,
            d.margraed12,
            d.margraed21,
            d.margraed22,
            d.margraed31,
            d.margraed32,
            d.margraed41,
            d.margraed42,
            d.margraed51,
            d.margraed52,
            d.margraed61,
            d.margraed62,
            d.margraed71,
            d.margraed72,
            d.margraed81,
            d.margraed82,
            d.margraedTotal,
            d.ordhle1,
            d.ordhle2,
            d.ordhle3,
            d.ordhle4,
            d.ordhle5,
            d.ordhle6,
            d.ordhle7,
            d.ordhle8,
            d.ordhle9,
            d.ordhle10,
            d.ordhleTotal,
            d.hljodtenging1,
            d.hljodtenging2,
            d.hljodtenging3,
            d.hljodtenging4,
            d.hljodtenging5,
            d.hljodtenging6,
            d.hljodtenging7,
            d.hljodtenging8,
            d.hljodtengingTotal,
            d.total,
          ];
          data.push(row);
        });
        return data;
      })
      .then((data) => {
        let svarlykill =
          "Svarlykill, 0000000000, , , ,ur,ol,ur,as,ol,ol,egg,is,is,aer,egg,aer,12,3,3,3,2,4,4,2,4,8,true,true,true,true,true,true,true,true,true,true,,,,,,,,,,,10,true,false,true,true,false,true,false,true,true,false,true,true,true,true,false,15,c,d,a,d,c,d,a,d,a,d,a,c,a,d,c,b,8,true,true,true,true,true,true,true,true,true,true,10,true,true,true,true,true,true,true,true,8,71" +
          "\r\n";
        let csvContent =
          svarlykill +
          "nafn,kt,kyn,dagagamall,aldursbil,rim1,rim2,rim3,rim4,rim5,rim6,rim7,rim8,rim9,rim10,rim11,rim12,rimTotal,samstofur1,samstofur2,samstofur3,samstofur4,samstofur5,samstofur6,samstofur7,samstofur8,samstofurTotal,samsett1,samsett2,samsett3,samsett4,samsett5,samsett6,samsett7,samsett8,samsett9,samsett10,samsett1rangt,samsett2rangt,samsett3rangt,samsett4rangt,samsett5rangt,samsett6rangt,samsett7rangt,samsett8rangt,samsett9rangt,samsett10rangt,samsettTotal,hljodgreining1,hljodgreining2,hljodgreining3,hljodgreining4,hljodgreining5,hljodgreining6,hljodgreining7,hljodgreining8,hljodgreining9,hljodgreining10,hljodgreining11,hljodgreining12,hljodgreining13,hljodgreining14,hljodgreining15,hljodgreiningTotal,margraed11,margraed12,margraed21,margraed22,margraed31,margraed32,margraed41,margraed42,margraed51,margraed52,margraed61,margraed62,margraed71,margraed72,margraed81,margraed82,margraedTotal,ordhle1,ordhle2,ordhle3,ordhle4,ordhle5,ordhle6,ordhle7,ordhle8,ordhle9,ordhle10,ordhleTotal,hljodtenging1,hljodtenging2,hljodtenging3,hljodtenging4,hljodtenging5,hljodtenging6,hljodtenging7,hljodtenging8,hljodtengingTotal,total" +
          "\r\n";
        data.forEach(function (rowArray) {
          let row = rowArray.join(",");
          csvContent += row + "\r\n";
        });
        const filename = "hljom-2-gogn.csv";
        const blob = new Blob([csvContent], {
          type: "text/csv;charset=utf-8",
        });

        saveAs(blob, filename);
      });
  });

  function login(email, pass) {
    auth
      .signInWithEmailAndPassword(email, pass)
      .then((cred) => {
        loginForm.classList.add("hide");
        download.classList.remove("hide");
        logoutButton.classList.remove("hide");
      })
      .catch((err) => {
        villa.textContent = "Notendanafn og/eða lykilorð er rangt.";
        villa.classList.add("error");
      });
  }

  function logout() {
    auth.signOut().then(() => {
      loginForm.classList.remove("hide");
      download.classList.add("hide");
      logoutButton.classList.add("hide");
    });
  }
});
