// Upload an images with showing the file name
$('.custom-file-input').on('change', function () {
  let fileName = $(this).val().split('\\').pop()
  $(this).siblings('.custom-file-label').addClass('selected').html(fileName)
})
