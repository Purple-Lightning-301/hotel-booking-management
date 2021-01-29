import React, { useState, useEffect } from 'react';
import MaterialTable from 'material-table'
import * as ApiCaller from '../../helpers/index';
import { useCookies, removeCookie } from 'react-cookie';
import Main from './../../components/organisms/Main';
import * as Setting from '../../components/constants/Setting';

function ListBooking(props) {
  const [folioData, setFolioData] = useState();
  const [cookies] = useCookies(['']);
  const token = cookies.access_token;

  useEffect(() => {
    callApi();
  }, []);

  function callApi() {

    try {
      ApiCaller.handleGet("api/folio/", token)
        .then((res) => {
          setFolioData(res.data.data)
        })
        .catch((err) => {
          console.log(err);
        });
    } catch (e) {
      alert(e.message)
    }
  }


  return (
    <Main>
      <div style={{ maxWidth: '100%' }}>
        <MaterialTable
          options={{
            search: true,
            exportButton: true,
            filtering: true
          }}
          columns={[
            { title: "Folio ID", field: "id" },
            { title: "Confirm No", field: "confirm_no" },
            { title: "Người đặt", field: "customer_name" },
            { title: "Tình trạng", field: 'status_folio', render: rowData => <span className="text-success" style={{ fontWeight: 'bold', minWidth: '100px' }}>{rowData.status_folio}</span> },
            { title: "Số phòng", field: "room_id" },
            { title: "Rate Code", field: "price_total" },
            { title: "Rate Override", field: "rate_override" },
            { title: "Tiền ứng trước", field: "price_advance" },
            { title: "Ngày đến", field: "date_arrival" },
            { title: "Ngày đi", field: "date_department" },
          ]}
          data={folioData}
          title="KHÁCH LẺ"
        />
      </div>
    </Main>
  );
}

export default ListBooking;