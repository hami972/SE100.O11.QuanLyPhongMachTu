import React from 'react'
import './mistyles.css'

const XemBaoCaoBacSiTheoThang = (props) => {
  const doanhthu = [
    {
      bacSi: 'Trần Văn ABC',
      soLuongCaThucHien: '66',
      soLuongBenhNhan: '23',
      tongDoanhThu: '4000000',
    },
    {
      bacSi: 'Trần Văn ABC',
      soLuongCaThucHien: '66',
      soLuongBenhNhan: '23',
      tongDoanhThu: '4000000',
    },
    {
      bacSi: 'Trần Văn ABC',
      soLuongCaThucHien: '66',
      soLuongBenhNhan: '23',
      tongDoanhThu: '4000000',
    },
  ];
  return (
    <div>
      <form name="xemTheoThang" action="/action_page.php">
        <div class="mb-3 mt-3">
          <label for="month"><b>Chọn tháng, năm:</b></label> <br />
          <input class="customBox" type="month" id="month" placeholder="Chọn tháng năm" name="month" />
        </div>

        <button type="submit" class="btn btn-primary">Xem</button>
      </form>
      <h1 class="noteVND">**Tính theo đơn vị VNĐ</h1>
      <table class="table" >
        <thead>
          <tr class="table-secondary">
            <th>Bác sĩ</th>
            <th>Số lượng ca thực hiện</th>
            <th>Số lượng bệnh nhân</th>
            <th>Tổng doanh thu</th>
          </tr>
        </thead>
        <tbody>
          {doanhthu.map((item, index) => (
            <tr key={index}>
              <td>{item.bacSi}</td>
              <td>{item.soLuongCaThucHien}</td>
              <td>{item.soLuongBenhNhan}</td>
              <td>{item.tongDoanhThu}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default XemBaoCaoBacSiTheoThang;