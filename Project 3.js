$(document).ready(function () {
    localStorage.removeItem("data");
    $(document).on('click', '.button1', function () {
        // Lấy giá trị input
        var ten = $('#ten').val();
        var diemtoan = $('#toan').val();
        var diemly = $('#ly').val();
        var diemhoa = $('#hoa').val();

        var textErrors = "Dữ liệu không được phép để trống";
        var numberErrors = "Giá trị nhập vào không được phép âm hoặc lớn hơn 10";
        var errors = [];
        if (ten == '') {
            $('.loiten').html(textErrors);
            $('.loiten').css('display', 'block');
            errors.push('loiten');
        } else {
            $('.loiten').html('');
            $('.loiten').css('display', 'none');
            var numberName = errors.indexOf('loiten');
            if (numberName != -1) {
                errors.splice(numberName, 1);
            }
        }
        if (diemtoan == '') {
            $('.loidiemtoan').html(textErrors);
            $('.loidiemtoan').css('display', 'block');
            errors.push('loidiemtoan');
        } else {
            if (parseInt(diemtoan) < 0 || parseFloat(diemtoan)>10) {
                $('.loidiemtoan').html(numberErrors);
                $('.loidiemtoan').css('display', 'block');
                errors.push('loidiemtoan');
            } else {
                $('.loidiemtoan').html('');
                $('.loidiemtoan').css('display', 'none');
                var numberMaths = errors.indexOf('loidiemtoan');
                if (numberMaths != -1) {
                    errors.splice(numberMaths, 1);
                }
            }
        }
        if (diemly == '') {
            $('.loidiemly').html(textErrors);
            $('.loidiemly').css('display', 'block');
            errors.push('loidiemly');
        } else {
            if (parseInt(diemly) < 0 || parseFloat(diemly)>10) {
                $('.loidiemly').html(numberErrors);
                $('.loidiemly').css('display', 'block');
                errors.push('loidiemly');
            } else {
                $('.loidiemly').html('');
                $('.loidiemly').css('display', 'none');
                var numberly = errors.indexOf('loidiemly');
                if (numberly != -1) {
                    errors.splice(numberly, 1);
                }
            }
        }
        if (diemhoa == '') {
            $('.loidiemhoa').html(textErrors);
            $('.loidiemhoa').css('display', 'block');
            errors.push('loidiemhoa');
        } else {
            if (parseInt(diemhoa) < 0 || parseFloat(diemhoa)>10) {
                $('.loidiemhoa').html(numberErrors);
                $('.loidiemhoa').css('display', 'block');
                errors.push('loidiemhoa');
            } else {
                $('.loidiemhoa').html('');
                $('.loidiemhoa').css('display', 'none');
                var numberhoa = errors.indexOf('loidiemhoa');
                if (numberhoa != -1) {
                    errors.splice(numberhoa, 1);
                }
            }
        }
        
        //Neu gia tri nhap vao khong loi
        if (errors.length == 0) {
            //khoi tao mang luu data va gan gia tri
            var data = new Array();
            var diemthi = {
                ten: ten,
                toan: diemtoan,
                ly: diemly,
                hoa: diemhoa
            }
            if (localStorage.getItem('data') != null) {
                data = JSON.parse(localStorage.getItem('data'));
            }
            data.push(diemthi);
            localStorage.setItem('data', JSON.stringify(data));
            //lap hien thi du lieu
            var html = '';
            data.forEach(function (value, index) {
                var num = parseInt(index) + 1;

                html += '<tr>';
                html += '<td>' + num + '</td>';
                html += '<td>' + value.ten + '</td>';
                html += '<td>' + value.toan + '</td>';
                html += '<td>' + value.ly + '</td>';
                html += '<td>' + value.hoa + '</td>';
                html += '<td>' + "?" + '</td>';
                html += '</tr>';
            });
            $('.bangdiem').html(html);
            //xoa form nhap lieu
            $('#ten').val('');
            $('#toan').val('');
            $('#ly').val('');
            $('#hoa').val('');
        }

    });
    //tinh trung binh
    $(document).on('click', '.button2', function () {
        var data = new Array();
        if (localStorage.getItem('data') != null) {
            data = JSON.parse(localStorage.getItem('data'))
        }
        //lap hien thi du lieu
        var html = '';
        data.forEach(function (value, index) {
            var num = parseInt(index) + 1;
            var diemtb = (parseFloat(value.toan) + parseFloat(value.ly) + parseFloat(value.hoa)) / 3;
            html += '<tr>';
            html += '<td>' + num + '</td>';
            html += '<td>' + value.ten + '</td>';
            html += '<td>' + value.toan + '</td>';
            html += '<td>' + value.ly + '</td>';
            html += '<td>' + value.hoa + '</td>';
            html += '<td>' + diemtb.toFixed(1) + '</td>';
            html += '</tr>';
        });
        $('.bangdiem').html(html);
        $(document).on('click', '.button3', function () {
            var x = [];
            $('.bangdiem tr').each(function () {
                var trungbinh = $(this).find("td").eq(5).html();
                if (trungbinh >= 8) {
                    $(this).addClass("todo");
                }
            });

        });
        $(document).on('click', '.button4', function () {
            var a = prompt("Bạn muốn xóa dữ liệu học sinh STT bao nhiêu: ");
            document.getElementById("bangdiem").deleteRow(a);
            var table = document.getElementById("bangdiem");
            var rowArray = table.rows;
            for (a; a < rowArray.length; a++) {
                rowArray[a].cells[0].innerHTML = a;
            }
        });
        $(document).on('click', '.button5', function () {
            location.reload();
        });
    });
});