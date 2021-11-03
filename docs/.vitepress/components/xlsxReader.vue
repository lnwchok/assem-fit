<script>
import { onMounted, toRefs } from "vue";
import useXlsxReader from "./xlsxReader/use-xlsx-reader";
import useHeaderBody from "./xlsxReader/use-header-body";

import tableHeaderVue from "./xlsxReader/components/tableHeader.vue";
import tableBodyVue from "./xlsxReader/components/tableBody.vue";

export default {
  props: {
    TableName: { type: String, required: true },
    Header: { type: String }
  },
  components: {
    tableHeader: tableHeaderVue,
    tableBody: tableBodyVue
  },
  setup(props) {
    const { TableName, Header } = toRefs(props);
    const { dataTable, headerTable, getXlsData } = useXlsxReader(TableName);

    const { headersValue,  bodiesValue } = useHeaderBody(
      dataTable,
      headerTable,
      Header
    );

    onMounted(getXlsData);

    return {
      bodiesValue,
      headersValue,
    };
  }
};
</script>

<template>
  <div>
    <table>
      <table-header :data="headersValue" />
      <table-body :data="bodiesValue" />
    </table>
  </div>
</template>