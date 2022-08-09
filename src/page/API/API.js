const Api = (props) => {
  let path = "http://localhost/billing/public/";
  let uploads = "http://localhost/billing/";///ใช้ระบบpath ไฟลที่อัพ
  let store = "http://localhost/billing/Axapi/";

  switch (props) {
    // -------------------- Category -----------------------
    case "Login":
      return path + "Login";
    case "Storelogin":
      return path + "Storelogin";
   case "Showlistnameusers":
      return path + "allusers";
    case "Allnormaluser":
      return path + "allnormaluser";
    case "Info_user":
      return path + "infouser/";
    case "Delectuser":
      return path + "delectuser/";
    case "Repassword":
      return path + "repassword/";
    case "Registerusers":
      return path + "addusers";
    case "Opbill":
      return path + "opbill";
    case "Checkdate":
      return path + "checkdate";
    case "Billend":
      return path + "updateEndbill";
    case "Dateshows":
      return path + "opbilldateshow";
    case "Today":
      return path + "selecttoday";
    case "Addbills":
      return path + "addbill";
    case "Editamount":
      return path + "editamountbill/";
    case "Addfire":
      return path + "addfile/";
    case "Listfile":
      return path + "listfile/";
    case "Delectfile":
      return path + "Delectfile/";
    case "Delectbills":
      return path + "Delectbills/";

    case "Storelist":
      return path + "storelist";
    case "Findstore":
      return path + "findstore/";
    case "Delectstore":
      return path + "delectstore/";
    case "Resetpassstore":
      return path + "Resetpassstore/";
    case "AddStore":
      return path + "addStore";
    case "BilllistAtive":
      return path + "billlistative/";
    case "Billid":
      return path + "billid/";
    case "Sentapprove":
      return path + "sentapprove/";
    case "Movefile":
      return path + "movefiles/";

    case "Findcmbill":
      return path + "findcmbill/";
    case "Billlist":
      return path + "billlist";
    case "Billpasslist":
      return path + "billpasslist";
    // case "Billinmonth":
    //   return path + "Billinmonth";
    case "Approve":
      return path + "approve/";
    case "Billhistory":
      return path + "billhistory/";
    case "Monthyearlist":
      return path + "monthyearlist";
    case "Billbymonthyearlist":
      return path + "billbymonthyearlist";
    case "Editdetailbill":
      return path + "editdetailbill/";

    case "searchIDbill":
      return path + "searchIDbill/";
    case "searchIDbillwait":
      return path + "searchIDbillwait/";
    case "Monthlist":
      return path + "Monthlist/";
    case "Billpassyearlist":
      return path + "Billpassyearlist/";
    case "CheckStore":
      return path + "CheckStore/";

    case "SearchNameStore":
      return path + "searchNameStore/";

    case "Billnotpasslist":
      return path + "Billnotpasslist";
    case "SearchIDbillnotpass":
      return path + "searchIDbillnotpass/";

    ///////////////////////excel//////////////////////
    case "Exportexcel":
      return path + "export";

      case "Import":
        return path + "Import";
      

    ///////////////////////////////////////////////




    case "Getstore":
      return store + "";
    case "Getstoreinfo":
      return store + "getstore.php?ID=";
    case "SearchStore":
      return store + "search.php?ID=";
    case "Getstoreinvoice":
      return store + "invoice.php?ID=";
    case "GetInvoicedt":
      return store + "getInvoice.php?ID=";

    case "Logins":
      return store + "login.php";

    case "Uploadfolder":
      return uploads + "img/upload/";

    default:
      return "";
  }
};

export default Api;
