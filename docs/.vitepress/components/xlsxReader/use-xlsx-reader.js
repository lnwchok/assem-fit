import XLSX from "xlsx";
import axios from "axios";
import { ref } from "vue";
import tblRange from "./mapRange.js";

const url = "/db.xlsx";

export default function (table) {
  const dataTable = ref([]);
  const headerTable = ref([]);

  const getXlsData = async () => {
    let { sheet, range } = tblRange[table.value];
    if (typeof sheet === "undefined") return;
    try {
      var rr = await axios.get(url, { responseType: "arraybuffer" });
      var data = new Uint8Array(rr.data);
      var wb = XLSX.read(data, { type: "array" }, "-j");
      var res = XLSX.utils.sheet_to_json(wb.Sheets[sheet], {
        header: 1,
        range,
        defval: ''
      });
      headerTable.value = res[0];
      dataTable.value = res.splice(1);
    } catch (e) {
      console.log(e);
    }
  };

  return {
    dataTable,
    headerTable,
    getXlsData
  };
}
