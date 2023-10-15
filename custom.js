jQuery(document).ready(function ($) {
  // アスメルフォーム
  // 改行
  var form_html = $('form[name="asumeru_form"]').html();
  var add_return = form_html.replace("メールマガジンを送信する事に同意します", "メールマガジンを送信する事に同意します<br>");
  $('form[name="asumeru_form"]').html(add_return);

  $('form[name="asumeru_form"] input[name="touroku_free1[]"]').prop("checked",true);
  $('form[name="asumeru_form"] input[name="touroku_free1[]"]').after('&nbsp;');
});