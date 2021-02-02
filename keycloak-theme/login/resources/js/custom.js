
/* export class AIACommand {
  constructor(keycloak, action) {
    this.keycloak = keycloak;
    this.action = action;
  }

  execute() {
    this.keycloak.login({
      action: this.action
    });
  }
}*/

function showDelete(id) {
  $('.nuxt-link-active').removeClass('nuxt-link-active');
  $('#deleteAcc').toggleClass('d-none');
  $('#accProfile').toggleClass('d-none');
  if ($('#accProfile').hasClass('d-none')) {
    $('#' + id).addClass('nuxt-link-active');
  } else {
    $('#' + id).removeClass('nuxt-link-active');
  }
}

/* function callSlack(url, email) {
  // $('#updateFeedback').addClass('d-none');
  let today = new Date();
  let dd = String(today.getDate()).padStart(2, '0');
  let month = today.toLocaleString('default', { month: 'long' });
  let yyyy = today.getFullYear();

  today = month + ', ' + dd + ' ' + yyyy;
  const text = 'The following user ' + email
              + ' has requested their account to be removed.\n Please remove their data from the following systems:\n\n• Keycloak\n\n• The User Sets API'
              + '\n\n• The recommendation engine'
              + '\n\n• Mailchimp' + '\n\n\nThe date of their request is '
              + today
              + '. You have until 30 days from this date to action this request.';

  /* $.ajax({
    data: 'payload=' + JSON.stringify({
      text
    }),
    processData: false,
    type: 'POST',
    url,
    success() {
      $('#deleteFeedback').removeClass('d-none');
      $('div#deleteAlert').removeClass('alert-error');
      $('div#deleteAlert').addClass('alert-success');
      $('#errorIcon').addClass('d-none');
      $('#deleteText').text('Your request is being processed');
    },
    error(XMLHttpRequest, textStatus, errorThrown) {
      $('#deleteFeedback').removeClass('d-none');
      $('div#deleteAlert').removeClass('alert-success');
      $('div#deleteAlert').addClass('alert-error');
      $('#errorIcon').removeClass('d-none');
      $('#deleteText').text('An error occured, please try again');
    }
  });*/
// xmlhttp.setRequestHeader('Authorization', 'Bearer ' + token);
/* }

function callAPI(apiurl, token) {
  // let key_id = getCookie('KEYCLOAK_IDENTITY');
  // alert(key_id);
  $.ajax({
    url: apiurl,
    type: 'DELETE',
    dataType: 'json',
    xhrFields: {
      withCredentials: true
    },
    crossDomain: true,
    headers: { 'Authorization': 'Bearer ' + token },
    success() {
      $('#deleteFeedback').removeClass('d-none');
      $('div#deleteAlert').removeClass('alert-error');
      $('div#deleteAlert').addClass('alert-success');
      $('#errorIcon').addClass('d-none');
      $('#deleteText').text('Your request was accepted');
    },
    error(XMLHttpRequest, textStatus, errorThrown) {
      $('#deleteFeedback').removeClass('d-none');
      $('div#deleteAlert').removeClass('alert-success');
      $('div#deleteAlert').addClass('alert-error');
      $('#errorIcon').removeClass('d-none');
      $('#deleteText').text(textStatus);
    }
    // Fetch the stored token from localStorage and set in the header
    // headers: { 'Authorization': 'Bearer ' + token }
  });
}*/
