$(document).ready(function() {
	$('.quote-init .select-currency').attr('disabled',true);

	$('#country-error').detach();

 
	
	/*$(".order-text").hide();   
	
	$(".order-arrow").click( function(){
		
		$(this).toggleClass('active');
		
		$(".order-text").slideToggle();   
		
	});*/
	
	
	
	/*** Qual Form Functions Starts ***/
	$('.sub-form-panel').hide();
	
	$( ".qual-form-body input[type=checkbox]" ).change(function() {
		
		if ($('#contigentPricing').is(':checked')) { 
			$('.contigent-pricing-block').show();
		} else {
			$('.contigent-pricing-block').hide();
		}
		
		if ($('#legalAgreements').is(':checked')) {
			$('.legal-agreement-block').show();
		}else {
			$('.legal-agreement-block').hide();
		}	
		
		if ($('#nspaymentTerms').is(':checked')) {
			$('.ns-payment-block').show();
		}else {
			$('.ns-payment-block').hide();
		}	
		
		if ($('#customInvoicing').is(':checked')) {
			$('.custom-invoicing-block').show();
		}else {
			$('.custom-invoicing-block').hide();
		}	
		
		if ($('#otherNSTerms').is(':checked')) {
			$('.other-ns-block').show();
		}else {
			$('.other-ns-block').hide();
		}	
		
		if ($('#Saas').is(':checked')) {
			$('.sass-block').show();
		}else {
			$('.sass-block').hide();
		}	 
	});
	
	setTimeout(function(){ $(".approval-alert").fadeOut(); }, 3000);
	
	$(".selectReason").hide();
	$('input[type=radio][name=radio-er]').change(function() {
		if (this.value == 'no') {
			$('.selectReason').show();
		}
		else if (this.value == 'yes') {
			$('.selectReason').hide();
		}
	});
	/*** Qual Form Functions Ends ***/
	
	
	/* -- View Usage -- */
	$('.export-csv-file').on('click', function() {
		$(this).attr("href", "./csv/sample.csv");
	});
	
	
	$('.outerDiv-viewspend .total-spend-chart, .outerDiv-viewspend .total-quantity-chart, .outerDiv-viewspend .chart-panel, .outerDiv-viewOverage .chartOverage').hide();
	$('.viewspenddropdwn').on('change', function() {
		var v = this.value;
		if (v == 0) {
			$('.viewTspend .heading').text('SKU Price Percentage for');
			$('.outerDiv-viewspend .total-spend-chart, .outerDiv-viewspend .total-quantity-chart, .outerDiv-viewspend .chart-panel').hide();
			$('.outerDiv-viewspend .no-usage-found').show();
		} else if (v == 1) {
			$('.viewTspend .heading').text('SKU Price Percentage for');
			$('.outerDiv-viewspend .no-usage-found, .outerDiv-viewspend .total-quantity-chart').hide();
			$('.outerDiv-viewspend .total-spend-chart, .outerDiv-viewspend .chart-panel').show();
		} else if (v == 2) {
			$('.viewTspend .heading').text('SKU Quantity Percentage for');
			$('.outerDiv-viewspend .no-usage-found, .outerDiv-viewspend .total-spend-chart').hide();
			$('.outerDiv-viewspend .total-quantity-chart, .outerDiv-viewspend .chart-panel').show();
		}
	});
	$('.usage-overage-slt').on('change', function() {
		var v = this.value;
		if (v == 1) {
			$('.outerDiv-viewOverage .chartOne').show();
			$('.outerDiv-viewOverage .chartOverage').hide();
		} else if (v == 2) {
			$('.outerDiv-viewOverage .chartOne').hide();
			$('.outerDiv-viewOverage .chartOverage').show();
		}
	});
	$('.mass-loader').hide();
	$('.transaction-table tr.failedRow').hide();
	$(document).on("click", ".transaction-table tr", function() {
		$(this).next('tr.failedRow').toggle();
		$(this).find('.expand').toggleClass('active');
	});
	$('.subs-payment-data.pay-summary.cc-exp-date').hide();
	var option;
	var url = window.location.href;
	opt = url.match(/option=(.*)/);
	/*invoice to pay*/
	var paymentOpt;
	paymentOpt=url.match(/payment=(.*)/);
	if(paymentOpt!=null){
		if(paymentOpt[1]=='inprogress'){
			$('.landing-search.empty-view,.inporgress-check').hide();
			$('.search-results-box').show();
			$('.payment-inprog-text').removeClass('hide');
			var total=0;
			$('.payment-inprog-text').each(function(){
				var tr=$(this).closest('tr');
				var balanceAmt=tr.find('.balance-amt').text();
				balanceAmt=balanceAmt.replace(',','');
				total=parseInt(total)+parseInt(balanceAmt);
			});
			$('.total-amt').text(addCommas(total)+'.00');
		}
	}
	/*invoice to pay*/
	if (opt != null && opt.length) option = opt[1];
	if (option == "modify") {
		$('.flag1').show();
		$('.flag2, .flag3, .flag4').hide();
	} else if (option == "modifyRenew") {
		$('.flag2').show();
		$('.flag1, .flag3, .flag4').hide();
	} else if (option == "renew") {
		$('.flag3').show();
		$('.flag1, .flag2, .flag4').hide();
	} else if (option == "credit") {
		$('.subs-payment-data.pay-summary').addClass('credit');
		$('.cc-exp-date').show();
	} else if (option == "addCard") {
		console.log(123);
		$('.purchase-Order-box, .active-cc-detail, .no-cc-error').hide();
		$('.no-cc-row, .purchase-Order-box').show();
		$('.payment-method-panel .current-method').text('ACH/Check/Wire Transfer');
	} else if (option == "addCreditCard") {
		$('#addNewCreditCard').modal('show');
		$('.delete-open-card').hide();
		$('.save-card-details').hide();
		$('.back-to').show();
	} else {
		$('.flag4').show();
		$('.flag1, .flag2, .flag3').hide();
		$('.back-to').hide();
		$('.no-cc-error').hide();
		
	}
	
	if (navigator.userAgent.indexOf('Mac') > 0) {
		$('body').addClass('mac-os');
	}
	$(document).on("click", ".okBtn, .delete-qoute-cancel", function() {
		$('#deleteaddedcontact .delete-warning, .delete-qoute-cancel, #deleteaddedcontact .doneBtn').show();
		$('#deleteaddedcontact .delete-success, #deleteaddedcontact .okBtn').hide();
		$('*').removeClass('hide-div show-div');
	});
	var deleteContact = false;
	$(document).on("click", ".doneBtn", function() {
		console.log(deleteContact);
		if (deleteContact) {
			$('.contactOuterBox.active').find('.mass-contact-add').hide();
			$('.contactOuterBox.active').find('.mass-contact').show();
			$('.contactOuterBox').removeClass('active');
			deleteContact = false;
			if ($('.mass-billingCt-outer .blank-mass-bill-contact-add').is(':visible')) {
				$('.mass-billingCt-outer .mass-business-addr').show();
				$('.mass-billingCt-outer .mass-support-addr').show();
				if ($('.mass-businessCt-outer .blank-mass-business-contact-add').is(':visible')) {
					$('.mass-billingCt-outer .mass-business-addr').hide();
				}
				if ($('.mass-suppprtCt-outer .blank-mass-supp-contact-add').not(':visible')) {
					$('.mass-billingCt-outer .mass-support-addr').hide();
				}
			}
			if ($('.mass-businessCt-outer .blank-mass-business-contact-add').is(':visible')) {
				$('.mass-businessCt-outer .mass-billing-addr').show();
				$('.mass-businessCt-outer .mass-support-addr').show();
				if ($('.mass-billingCt-outer .blank-mass-bill-contact-add').is(':visible')) {
					$('.mass-businessCt-outer .mass-billing-addr').hide();
				}
				if ($('.mass-suppprtCt-outer .blank-mass-supp-contact-add').not(':visible')) {
					$('.mass-businessCt-outer .mass-support-addr').hide();
				}
			}
			if ($('.mass-suppprtCt-outer .blank-mass-supp-contact-add').not(':visible')) {
				$('.mass-suppprtCt-outer .mass-billing-addr').show();
				$('.mass-suppprtCt-outer .mass-business-addr').show();
				if ($('.mass-businessCt-outer .blank-mass-business-contact-add').is(':visible')) {
					$('.mass-suppprtCt-outer .mass-business-addr').hide();
				}
				if ($('.mass-billingCt-outer .blank-mass-bill-contact-add').is(':visible')) {
					$('.mass-suppprtCt-outer .mass-billing-addr').hide();
				}
			}
			$(this).hide();
			$('#deleteaddedcontact .delete-success span').text('Contact deleted successfully');
			$('#deleteaddedcontact .delete-warning, .delete-qoute-cancel').hide();
			$('#deleteaddedcontact .delete-success, #deleteaddedcontact .okBtn').show();
			$('.mass-proceed-review').prop('disabled', true);
			$('textarea.massDescription').attr('disabled', true);
			$('.mass-step-widget .review-info').addClass('disabled');
			setTimeout(function() {
				$('#deleteaddedcontact').modal('show');
			}, 500);
			return;
		} else {
			$('.mass-adrs-info.mass-billing-id').hide();
			$('.blank-billing-add,.add-product-form').show();
			$('.mass-autosearch').val('');
			$('.mass-proceed-review').prop('disabled', true);
			$('textarea.massDescription').attr('disabled', true);
			$('.mass-step-widget .review-info, .mass-contact').addClass('disabled');
			if ($('.mass-contact-add').is(':visible')) {
				$('.contactAddOuterDiv .mass-contact-add').addClass('disabled');
			}
		}
		$('li.deleted').remove();
		$(this).hide();
		console.log(123);
		$('#deleteaddedcontact .delete-warning, .delete-qoute-cancel').hide();
		$('#deleteaddedcontact .delete-success, #deleteaddedcontact .okBtn').show();
		setTimeout(function() {
			$('#deleteaddedcontact').modal('show');
		}, 500);
		$('.adrs-box-outr.hide-div, .profile-address.hide-div, .col-md-6.hide-div, .addres-box-outr.hide-div').hide();
		$('.primary-adrs-panel.show-div, .add-contact-panel.show-div').show();
		if ($('.contact-info-list li').length == 0) {
			$('.blankdiv-contact-panel').show();
			$('.page-level-sub-header.newcontactlistouter').hide();
		}
		var addressBlock = $('.hide-div').closest('.address-outer').length ? $('.hide-div').closest('.address-outer') : $('.hide-div').closest('.user-contacts-outer');
		if (addressBlock.length) {
			var addressLength = addressBlock.find('.add-contact-panel:visible').length;
			if (addressLength == 2) {
				addressBlock.find('.copy-adrs-link').hide();
			} else {
				$('.deleteaddressConfirm').closest('.address-billto').find('.copy-adrs-link').show();
				$('.deleteaddressConfirm').closest('.user-contacts').find('.copy-adrs-link').show();
			}
		}
		if ($('.deleteaddressConfirm').closest('.internal-card').length) {
			$('.deleteaddressConfirm').closest('.internal-card').find('.adrs-panel-outr').hide();
			$('.deleteaddressConfirm').closest('.search-contact-form').find('.search-panel input[type="text"]').val('');
			$('.deleteaddressConfirm').closest('.search-contact-form').find('.no-contacts-panel').show();
			$('.add-billing-contact').attr('disabled', true);
		}
		if ($('.selected-billing-add').is(':visible')) {
			if ($('.selected-shipping-add').not(':visible')) {
				$('.blank-shipping-add').find('.copy-adrs-link').show();
			} else {
				$('.blank-shipping-add').find('.copy-adrs-link').hide();
			}
		} else if ($('.selected-shipping-add').is(':visible')) {
			if ($('.selected-billing-add').not(':visible')) {
				$('.blank-billing-add').find('.copy-adrs-link').show();
			} else {
				$('.blank-billing-add').find('.copy-adrs-link').hide();
			}
		} else if ($('.selected-billing-add').not(':visible')) {
			if ($('.selected-shipping-add').not(':visible')) {
				$('.blank-shipping-add, .blank-billing-add').find('.copy-adrs-link').hide();
			}
		}
		$('*').removeClass('hide-div show-div');
	});
	$(document).on('click', '.deleteaddressConfirm', function() {
		$('#deleteaddedcontact .okBtn').hide();
		//console.log($(this).hasClass('massContactDelete'));
		if ($(this).hasClass('massContactDelete')) {
			console.log(111);
			$(this).closest('.contactOuterBox').addClass('active');
			deleteContact = true;
			$('#deleteaddedcontact .modal-title').text('Delete Contact');
			$('#deleteaddedcontact .delete-warning span').text('Are you sure you want to delete this Contact?');
			$('#deleteaddedcontact .delete-success span').text('Contact deleted successfully');
			return;
		}
		if ($(this).hasClass('massAddDelete')) {
			$('#deleteaddedcontact .modal-title').text('Delete Billing ID');
			$('#deleteaddedcontact .delete-warning span').text('Are you sure you want to delete this Billing ID?');
			$('#deleteaddedcontact .delete-success span').text('Billing ID deleted successfully');
			return;
		}
		$(this).closest('.adrs-box-outr, .profile-address, div.col-md-6, .user-contacts .addres-box-outr, .address-billto .addres-box-outr').addClass('hide-div');
		$(this).closest('.address-boxs').find('.primary-adrs-panel').addClass('show-div');
		$(this).closest('.address-billto').find('.add-contact-panel').addClass('show-div');
		$(this).closest('.addres-box-outr.user-contacts').find('.add-contact-panel').addClass('show-div');
		if ($(this).closest('ul.user-ctrl').hasClass('contacts-div')) {
			$('#deleteaddedcontact .modal-title').text('Delete Contact');
			$('#deleteaddedcontact .delete-warning span').text('Are you sure you want to delete this Contact?');
			$('#deleteaddedcontact .delete-success span').text('Contact deleted successfully');
		} else {
			if ($(this).closest('ul').hasClass('user-ctrl')) {
				$('#deleteaddedcontact .modal-title').text('Delete Address');
				$('#deleteaddedcontact .delete-warning span').text('Are you sure you want to delete this Address?');
				$('#deleteaddedcontact .delete-success span').text('Address deleted successfully');
			}
		}
	});
	$(document).on('click', '.delete-contact', function() {
		$('#deleteaddedcontact .modal-title').text('Delete Contact');
		$('#deleteaddedcontact .delete-warning span').text('Are you sure you want to delete this Contact?');
		$('#deleteaddedcontact .delete-success span').text('Contact deleted successfully');
		$('#deleteaddedcontact .delete-warning, #deleteaddedcontact .delete-qoute-cancel, #deleteaddedcontact .doneBtn').show();
		$('#deleteaddedcontact .delete-success, #deleteaddedcontact .okBtn').hide();
		$(this).closest('li').addClass('deleted');
		setTimeout(function() {
			$(this).closest('li').removeClass('deleted');
		}, 50000);
	});
	$(document).on("keyup blur", ".add-prov-email", function() {
		$('.prov-editable-email').hide();
		$('.nonEditable-email').show();
	});
	$(".del-value:contains('-')").each(function() {
		$(this).html($(this).html().replace("-", "<span class='minus-sign'>-</span>"));
	});
	$('.table-scroll-outerdiv .norecords').hide();
	$(document).on("keyup blur", "#chooseExisting", function() {
		var value = this.value.toLowerCase().trim();
		$("#myTable .withrecords tr").each(function(index) {
			if (!index) return;
			$(this).find("td").each(function() {
				var id = $(this).text().toLowerCase().trim();
				var matchedIndex = id.indexOf(value);
				var not_found = (matchedIndex == -1);
				if (not_found) {
					$(".table-scroll-outerdiv .withrecords").hide();
					$(".table-scroll-outerdiv .norecords").show();
				} else {
					$(".table-scroll-outerdiv .withrecords").show();
					$(".table-scroll-outerdiv .norecords").hide();
				}
				$(this).closest('tr').toggle(!not_found);
				return not_found;
			});
		});
	});
	$(document).on("click", "#modifyContacts-tab-panel .nav-tabs li a", function() {
		if ($(this).closest('li').hasClass('addNewC') || $(this).closest('li').hasClass('chooseExistC')) {
			$('#modifyContacts-tab-panel .update-contact-btn').hide();
			$('#modifyContacts-tab-panel .add-new-contct').show();
		} else {
			$('#modifyContacts-tab-panel .update-contact-btn').show();
			$('#modifyContacts-tab-panel .add-new-contct').hide();
		}
	});
	$(document).on("click", ".tabingContact", function() {
		if ($(this).hasClass('add-new-tab-cnt')) {
			var tabTitle = $(this).text();
			var avoid = "Click to ";
			var activeTitle = tabTitle.replace(avoid, '');
			$('#modifyContacts-tab-panel .modal-title').text(activeTitle);
			$('#modifyContacts-tab-panel .nav-tabs li.addNewC a').trigger('click');
			$('.nav-tabs .addNewC, #modifyContacts-tab-panel .add-new-contct').show();
			$('.nav-tabs .EditSelectC, #modifyContacts-tab-panel .update-contact-btn').hide();
			$('#modifyContacts-tab-panel #home input[type=text]').val('');
			$('#modifyContacts-tab-panel #home input[type=checkbox]').attr('checked', false);
		}
	});
	$(document).on("click", ".updated-tabing-contact", function() {
		$('#add-contact-succesful .success-msg').show();
		$('#add-contact-succesful .error-msg').hide();
		$('#add-contact-succesful').modal('show');
		$('#add-contact-succesful .modal-title').text("Contact Updated");
		$('#add-contact-succesful .alert-success span').text("Contact has been succesfully updated.");
	});
	$(document).on("click", ".change-btn", function() {
		if ($(this).hasClass('change-btn')) {
			$('#modifyContacts-tab-panel .modal-title').text('Edit Contact');
			$('#modifyContacts-tab-panel #home input[type=checkbox]').attr('checked', false);
			$('#modifyContacts-tab-panel #home input[type=text]').val('');
			console.log($(this).closest('li').find('.primary-email > span').text());
			$('#modifyContacts-tab-panel .nav-tabs li.EditSelectC a').trigger('click');
			$('.nav-tabs .EditSelectC, #modifyContacts-tab-panel .update-contact-btn').show();
			$('#modifyContacts-tab-panel .add-new-contct').hide();
			var modal = $('#modifyContacts-tab-panel');
			modal.find('.modal-title').text("Edit Contact");
			var email = $(this).closest('li').find('.primary-email > span').text();
			var fname = $(this).closest('li').find('.primary-name > span.fullname').text();
			var comapnyName = $(this).closest('li').find('.primary-name > span.company-name').text();
			var phoneNo = $(this).closest('li').find('.primary-phone-number > span').text();
			var faxNo = $(this).closest('li').find('.primary-phone-number > span').text();
			email = $.trim(email);
			phoneNo = $.trim(phoneNo);
			faxNo = $.trim(faxNo);
			modal.find('#menu2 .e-name').val(fname);
			modal.find('#menu2 .e-lname').val("Joe");
			modal.find('#menu2 .cco-id').val("amyjoe");
			modal.find('#menu2 .e-roll').val(comapnyName);
			modal.find('#menu2 .e-email').val(email);
			modal.find('#menu2 .e-phone').val(phoneNo);
			modal.find('#menu2 .e-fax').val(faxNo);
			modal.find('#menu2 .e-coutry').val("America");
			modal.find('#menu2 .e-company').val("Ruckus Pizza Inc.");
		}
	});
	$(".updated-tabing-contact").click(function() {});
	$('.items-r-quote, .norecords.reopen-quote-norecord').hide();
	setTimeout(function() {
		$('.records.reopen-quote-withrecord').show();
	}, 100);
	$('.reopen-quote-popup-btn').click(function() {
		$('.reopen-quote-btn').hide();
		$('.items-r-quote, .reopen-quote-msg').show();
		$('.quote-product, .config-add-btn, .quote-qty').attr('disabled', false);
		$('.select-product *, .caretDown, .caretUp').removeClass('disabled');
		setTimeout(function() {
			$('.reopen-quote-msg').fadeOut(300);
		}, 3000);
	});
	$('.reopen-quote-page-btn').click(function() {
		$('.reopen-quote-msg').fadeIn();
		setTimeout(function() {
			$('.reopen-quote-msg').fadeOut(300);
			// window.location = 'items-reopen-quote.html';
		}, 3000);
	});
	$('.delete-qoute-id').click(function() {
		$(this).hide();
		$('.delete-warning').hide();
		$('.delete-qoute-cancel').hide();
		$('.delete-success').show();
		$('.delete-qoute-confirm').show();
		$('#deleteQuote').addClass('delete-qoute-confirm-modal');
		setTimeout(function() {
			$('.delete-qoute-confirm-modal').modal('hide');
			window.location = 'quote.html';
		}, 3000);
	});
	$('.order-modal .delete-qoute-id').click(function() {
		setTimeout(function() {
			$('.delete-qoute-confirm-modal').modal('hide');
			window.location = 'order.html';
		}, 3000);
	});
	$('.subscription-modal .delete-qoute-id').click(function() {
		setTimeout(function() {
			$('.delete-qoute-confirm-modal').modal('hide');
			window.location = 'index.html';
		}, 3000);
	});
	$('.quote-not-available').click(function() {
		setTimeout(function() {
			$('#quoteUnavailable').modal('hide');
			//window.location = 'index.html';
		}, 15000);
	});
	//$('.delete-qoute-id').click( function(){
	$('.showOldValues').click(function() {
		if ($(this).is(':checked')) {
			$(this).closest('.ds-table-panel').find('table .old-value').slideDown(200);
			$(this).closest('.modal-body').find('table .old-value').slideDown(200);
		} else {
			$(this).closest('.ds-table-panel').find('table .old-value').slideUp(200);
			$(this).closest('.modal-body').find('table .old-value').slideUp(200);
		}
	});
	setTimeout(function() {
		var maxHeight = Math.max.apply(null, $(".paymentOuter .subs-payment-info").map(function() {
			return $(this).outerHeight();
		}).get());
		//console.log(maxHeight);
		$('.paymentOuter .subs-payment-info').outerHeight(maxHeight);
	}, 100);
	setTimeout(function() {
		var maxHeight = Math.max.apply(null, $(".paymentOuter .subs-payment-info .duration-row").map(function() {
			return $(this).outerHeight();
		}).get());
		//console.log(maxHeight);
		$('.paymentOuter .subs-payment-info').css('paddingBottom', maxHeight + 24);
	}, 100);
	$(".histry-panel .histry-panel-headr").click(function() {
		$(this).toggleClass('collapsed');
		$(this).next('.histry-panel-body').slideToggle();
	});
	/***	Empty Search Area and Table Results Interaction **/
	$('.filter-search-btn').click(function() {
		var miscWord = $("#search-product").val();
		//if ( miscWord.indexOf("test") != -1 ) {
		if (miscWord == 'cisco') {
			$('.mass-loader').show();
			setTimeout(function() {
				$('.mass-loader').hide();
			}, 1500);
			$('.search-results-box').hide();
			$('.landing-search.empty-view, .total-results-box').hide();
			$('.landing-search.no-search-result').show();
			$('.search-results-box').hide();
			$('.total-results').text('No');
			//$('#search-product').val('');
		} else {
			$('.mass-loader').show();
			setTimeout(function() {
				$('.mass-loader').hide();
			}, 1500);
			$('.landing-search.empty-view').hide();
			$('.landing-search.no-search-result').hide();
			$('.search-results-box, .total-results-box').show();
			$('.total-results-box').find('.total-found-result, .bill-to-id').show();
			var $totalRowsCount = $('#landing-table tbody tr').length;
			$('.total-results').text($totalRowsCount);
		}
		sidebarH();
	});
	/** Get Total Count for Checked Checkboxes and Radio Buttons **/
	//Textbox,Textarea and Select Box js for IE9 Start
	$('.form-control').focus(function() {
		$(this).addClass('filled');
	});
	$('.form-control').blur(function() {
		if (!$(this).val().length) {
			$(this).removeClass('filled').removeClass('active');
		}
	});
	$('select').focus(function() {
		$(this).addClass('active');
	});
	$('select').blur(function() {
		$(this).find('option:selected').each(function() {
			if ($(this).val() == '') {
				$(this).closest('select').removeClass('active');
			}
		});
	});
	$('.exportPDFBtn').addClass('disabled');
	$('.excel-desc').hide();
	$("#exportQuote .radio-check, #downloadInvoice .radio-check").change(function() {
		if (this.checked) {
			$('.exportPDFBtn').removeClass('disabled');
			$excel = $("#r-2, #invoiceExcel").is(":checked");
			if ($excel) {
				$('.excel-desc').show();
				$(".exportPDFBtn").attr("href", "./xls/sample.xls");
				$(".exportPDFBtn").attr("download", "sample.xls");
			} else {
				$('.excel-desc').hide();
				$(".exportPDFBtn").attr("href", "./pdf/sample.pdf");
				$(".exportPDFBtn").attr("download", "sample.pdf");
			}
		} else {
			$('.exportPDFBtn').addClass('disabled');
		}
	});
	$('.modify-btn').click(function(e) {
		$('.modify-request').show();
		setTimeout(function() {
			$('.modify-request').slideUp();
		}, 4000);
	});
	$('.update-contact-btn').click(function(e) {
		$('.contact-up-request').show();
		setTimeout(function() {
			$('.contact-up-request').slideUp();
		}, 4000);
	});
	$('.add-new-contct').click(function(e) {
		if ($(this).closest('.modal-content').find('.primaryReplace .address-popover').is(':visible')) {
			$(this).closest('.modal-content').find('.overwrite-error').show();
			return;
		} else {
			$('.new-contact-request').show();
			$(this).closest('.modal-content').find('.overwrite-error').hide();
			setTimeout(function() {
				$('.new-contact-request').slideUp();
			}, 4000);
		}
	});
	$('.replace-record').click(function(e) {
		$('.new-contact-request').show();
		setTimeout(function() {
			$('.new-contact-request').slideUp();
		}, 4000);
	});
	$('.sumry-link').click(function(e) {
		$(this).toggleClass('active');
		$('.net-change-panel-box').slideToggle(500);
		if ($('.sumry-link').hasClass('active')) {
			$('.summary-type').text("Hide Net Change Summary");
		} else {
			$('.summary-type').text("View Net Change Summary");
		}
	});
	/*	  
	
	$('.exportPDFBtn').click(function(e) {
		
		e.preventDefault();  //stop the browser from following
		
		window.location.href = 'pdf/sample.pdf';
		
	});*/
	$(document).on("click", ".renewSubsc", function() {
		var selectedVal, noteVal;
		selectedVal = $(this).closest('#newcaddreessform').find('select').val();
		noteVal = $(this).closest('#newcaddreessform').find('.quoteDescription').val();
		console.log(selectedVal, noteVal);
		if (selectedVal && noteVal) {
			window.location.href = 'renew-confirmation.html';
		} else {
			return;
		}
	});
	$(document).on("click", ".editaddressInfo", function() {
		setTimeout(function() {
			console.log(1);
			$('.form-control').each(function() {
				if ($(this).val().length) {
					if (!$(this).hasClass('filled')) {
						$(this).addClass('filled');
					}
				}
			});
			$('select').find('option:selected').each(function() {
				if (!$(this).val() == '') {
					$(this).closest('select').addClass('active');
				}
			});
		}, 5)
	});
	//Textbox,Textarea and Select Box js for IE9 End
	/*--------Addresses Length Check(3 or Greater)-------*/
	var addressesL = $('.ac-info-data > .address-outer').find('.col-sm-6').length;
	//console.log(addressesL)
	if (addressesL == 3) {
		$('.ac-info-data > .address-outer').find('.col-sm-6').addClass('col-sm-4');
		$('.ac-info-data > .address-outer').find('.col-sm-4').removeClass('col-sm-6');
	}
	/*--------/Addresses Length Check(3 or Greater)-------*/
	/*----Order Detail-----*/
	//console.log(123);
	$(document).on("click", ".uploadCertificate", function() {
		var totalcert = $(this).closest('.modal-content').find('.attachment-info').length;
		//console.log(totalcert);
		if (totalcert > 0) {
			$('.certificateName').show();
		} else {
			$('.certificateName').hide();
		};
		fileLength(certifCount);
	});
	//$("#addLineItemsOld .add-dispute-old-table tbody").niceScroll();
	$(document).on("click", ".ad-invoice", function() {
		var tagTitle = $(this).closest('.form-control-placeholder').attr('data-value');
		//console.log(tagTitle);
		if (tagTitle == "incInvoice") {
			$('.line-items-table').find('.modal-title').text("Invoice");
		} else {
			$('.line-items-table').find('.modal-title').text("Include Line Items");
		}
		setTimeout(function() {
			//$("#addLineItemsOld .add-dispute-old-table tbody").getNiceScroll().resize();
			//$("#addLineItems .modal-body").getNiceScroll().resize();
		}, 1000);
	});
	/* -- Add Dispute Inline line items */
	$('#addLineItems').find('input[type="checkbox"]').prop('checked', true);
	//$('#addLineItemsOld').find('input[type="checkbox"]').prop('checked', true);
	$('#addLineItems').modal({
		backdrop: 'static',
		keyboard: false,
		show: false
	});
	var inputCheckCount = 0;
	$(document).on('click', '.checkAllItems input', function() {
		var modal = $('#addLineItems');
		if ($(this).is(':checked')) {
			modal.find('input[type="checkbox"]').prop('checked', true);
		} else {
			modal.find('input[type="checkbox"]').prop('checked', false);
			inputCheckCount = 0;
		}
	});
	$(document).on('click', '#addLineItems .dispute-line-table thead input', function() {
		if ($(this).is(':checked')) {
			$(this).closest('table').find('tbody input[type="checkbox"]').prop('checked', true);
		} else {
			$(this).closest('table').find('tbody input[type="checkbox"]').prop('checked', false);
			inputCheckCount = 0;
		}
		var T = $(this).closest('table').find('tbody tr input[type="checkbox"]').length;
		var cT = $(this).closest('table').find('tbody tr input[type="checkbox"]:checked').length;
		console.log(cT, T);
		if (cT < T && cT > 0) {
			inputCheckCount = 1
		} else if (cT >= T) {
			inputCheckCount = 2;
		} else {
			inputCheckCount = 0;
		};
		console.log(inputCheckCount);
	});
	$(document).on('click', '#addLineItems input[type="checkbox"]', function() {
		if ($(this).is(':checked')) {
			$(this).prop('checked', true);
		} else {
			$(this).prop('checked', false);
		}
		var modal = $('#addLineItems');
		var T = modal.find('tbody tr input[type="checkbox"]').length;
		var cT = modal.find('tbody tr input[type="checkbox"]:checked').length;
		//console.log(cT, T);
		if (cT < T && cT > 0) {
			inputCheckCount = 1
		} else if (cT >= T) {
			inputCheckCount = 2;
		} else {
			inputCheckCount = 0;
		};
		//console.log(TTCk, TTCkd);
		if(cT<T){
			modal.find('.checkAllItems input[type="checkbox"]').prop('checked', false);
		}
		if(cT==T){
			modal.find('.checkAllItems input[type="checkbox"]').prop('checked', true);
		}
		//console.log(inputCheckCount);
	});

	var lineItemsdis;
	var modalLineItems = [];
	$(document).on('click', '#addLineItemsOld input[type="checkbox"]', function() {
		if ($(this).is(':checked')) {
			$(this).prop('checked', true);
		} else {
			$(this).prop('checked', false);
		}
		var modal = $('#addLineItemsOld');
		if ($(this).hasClass('checkAllItems')) {
			if ($(this).is(':checked')) {
				modal.find('tbody input[type="checkbox"]').prop('checked', true);
				inputCheckCount = 2;
			} else {
				modal.find('tbody input[type="checkbox"]').prop('checked', false);
			}
		}
		
		setTimeout(function (){
			var T = modal.find('tbody tr input[type="checkbox"]').length;
			var chT = modal.find('tbody tr input:checked').length;
			lineItemsdis = chT;
			if (T == chT) {
				inputCheckCount = 2
			} else if (chT < T && chT > 0) {
				inputCheckCount = 1;
			} else {
				inputCheckCount = 0;
			};
		},500);
	});
	$(document).on('click', '.unCheckAll', function() {
		var modal = $('#addLineItemsOld');
		modal.find('input[type="checkbox"]').prop('checked', false);
		var modal1 = $('#addLineItems');
		modal1.find('input[type="checkbox"]').prop('checked', false);
	});
	/* -- /Add Dispute Inline line items */
	$(document).on("click", ".addNewTag", function() {
		modalLineItems = [];
		
		$.each($('#addLineItemsOld').find('tbody tr'), function(index, value){
			if($(this).find('input[type="checkbox"]').is(':checked')){
				modalLineItems.push($(this).find('input[type="checkbox"]').attr('data-attr'))
			}
		});

		if(modalLineItems.length){
			$('.create-dispute-outr .include-invoice').removeClass('include-items');
		}else{
			$('.create-dispute-outr .include-invoice').addClass('include-items');
		}

		var tagTitle = $(this).closest('.line-items-table').find('.modal-title').text();
		//console.log(tagTitle, $('.include-line-div .invoice-tag').length);
		//console.log(inputCheckCount, lineItemsdis);

		if (tagTitle == "Invoice") {
			$('.include-Inv-div').append('<div class="invoice-tag"> <span>610001218</span> <i class="icon-circle-close delete-invoice tipsyTop" title="Delete Invoice"></i> </div>');
		} else {
			if (inputCheckCount == "1") {
				$('.include-line-div').html('');
				$.each(modalLineItems, function(index, value){
					$('.include-line-div').append('<div class="invoice-tag sub-level"> <span>'+value+'</span> <i class="icon-circle-close delete-invoice tipsyTop" title="Delete Invoice"></i> </div>');
				});
			} else if (inputCheckCount == "2") {
				console.log(22);
				$('.include-line-div').html('');
				$('.include-line-div').append('<div class="invoice-tag sub-level"><span>All</span> <i class="icon-circle-close delete-invoice tipsyTop unCheckAll" title="Delete Invoice"></i> </div>');
			} else {
				$('.include-line-div').html('');
				return;
			}
		}
		$('.tipsyTop').tipsy({
			gravity: 's'
		});
		inputCheckCount = 0;
	});
	$(document).on("click", ".delete-invoice", function() {
		$(this).tipsy('hide');
		var rowno = $(this).closest('.invoice-tag').text();
		console.log(rowno);
		rowno = rowno.trim();
		if($(this).hasClass('unCheckAll')){
			modalLineItems = [];
			$('#addLineItemsOld').find('tbody tr input[type="checkbox"]').prop('checked',false);
		}else{
			modalLineItems.splice( $.inArray(rowno,modalLineItems) ,1);
			$('#addLineItemsOld').find('tbody tr:nth-child('+rowno+') input[type="checkbox"]').prop('checked',false);
		}
		$(this).closest('.invoice-tag').remove();

		if(modalLineItems.length){
			$('.create-dispute-outr .include-invoice').removeClass('include-items');
		}else{
			$('.create-dispute-outr .include-invoice').addClass('include-items');
		}
	});
	$('.internal-view, .internal-cancel-order').fadeOut();
	$('.internal-view-status-show, .intenal-net-pay').hide();
	$(document).on("click", ".internal-view-btn", function() {
		if ($(this).hasClass('active')) {
			$('.internal-view, .internal-cancel-order').fadeIn();
			$('.internal-view-status-show, .intenal-net-pay').show();
			$('.non-internal-view-status, .intenal-you-pay').hide();
		} else {
			$('.internal-view, .internal-cancel-order').fadeOut();
			$('.internal-view-status-show, .intenal-net-pay').hide();
			$('.non-internal-view-status, .intenal-you-pay').show();
		}
	});
	$('.certificateName').hide();
	/** For Disabled User Interaction **/
	$('.external-errors').hide();
	$(document).on("click", ".internal-view-btn", function() {
		// $('.internal-view, .internal-cancel-order').hide();													
		$(this).toggleClass('show-external-errors');
		if ($(this).hasClass('show-external-errors')) {
			$('.external-errors').slideDown();
		} else {
			$('.external-errors').slideUp();
		}
	});
	$(".bill-to-id").attr('disabled', true);
	$(document).on('click', 'thead .check input, tbody tr input', function() {
		if ($(this).is(':checked')) {
			if ($(this).hasClass('checkAll')) {
				$(this).closest('table').find('tbody tr input').not(':disabled').prop('checked', true);
				$(this).closest('table').find('tbody .payment-chkbox input').prop('checked', true);				
				$(this).closest('table').find('tbody tr').each(function() {
					var balanceAmt=$(this).find('td .balance-amt').text();
					$(this).find('td .amt-search-panel input[type="text"]').val(balanceAmt);
				});
				$('.total-amt').text('176,304.00');
				$('.results-filtered .total-found-result').text('10 selected out of 20 result found');
			}
			$(this).closest('.internal-tbl-box').find('.release-hold-btn').removeAttr('disabled'); //enable input
			$(".bill-to-id, .proceed-to-pay").attr("disabled", false);
			
		} else {
			if ($(this).hasClass('checkAll')) {
				$(this).closest('table').find('tbody tr input').prop('checked', false);
				$('.results-filtered .total-found-result').text('Found 20 Results');
				$(this).closest('table').find('tbody .payment-chkbox input').prop('checked', false);				
				$(this).closest('table').find('tbody tr').each(function() {
					$(this).find('td .amt-search-panel input[type="text"]').val('');
				});
				$('.total-amt').text('0.00');
			}
			$(this).closest('.internal-tbl-box').find('.release-hold-btn').attr('disabled', true); //disable input
			$(".bill-to-id, .proceed-to-pay").attr("disabled", true);
		}
	});
	$('.on-hold').hover(function() {
		$('.progress-flyout').fadeIn();
	});
	$(document).mouseup(function(e) {
		var container = $(".progress-flyout");
		var container3 = $('.tooltip-info');
		if (!container.is(e.target) && container.has(e.target).length === 0) {
			container.hide();
		}
		if (!container3.is(e.target) && container3.has(e.target).length === 0) {
			// container3.hide();
		}
	});
	setTimeout(function() {
		if (!$('.quote-tile-row:visible').length) {
			$('.endCust-item-table').stickyTableHeaders({
				fixedOffset: 0
			});
		}
	}, 200);
	var heightQuoteTile;
	if ($('.quote-tile-row:visible').length) {
		function sticky_relocate() {
			var window_top = $(window).scrollTop();
			var div_top = $('.blankStickyDiv').offset().top;
			if (window_top > div_top) {
				$('.blankStickyDiv').height($('.quote-tile-row').outerHeight());
				$('.quote-tile-row').addClass('stick');
				$('.blankStickyDiv').css("height", $('.quote-tile-row').outerHeight());
			} else {
				$('.quote-tile-row').removeClass('stick');
				$('.blankStickyDiv').height(0);
				$('.blankStickyDiv').css("height", 0);
			};
			//$('.flex').css('padding-top', heightQuoteTile);
			heightQuoteTile = $('.quote-tile-row').outerHeight();
			$('.endCust-item-table').stickyTableHeaders({
				fixedOffset: heightQuoteTile
			});
		};
		$(function() {
			$(window).scroll(sticky_relocate);
			sticky_relocate();
		});
	};
	$(window).scroll(function() {
		$(".tableFloatingHeaderOriginal").each(function() {
			if ($(this).css('position') == "fixed") {
				$(this).addClass('active');
			} else {
				$(this).removeClass('active');
			}
		});
	});
	$('.invoice-progress-quote').hide()
	$(document).on("click", ".show-progress-qt", function() {
		$('.blank-progress-quote').hide();
		$('.invoice-progress-quote').fadeIn(300);
	});
	/*----/Order Detail-----*/
	/*-- Manage-contact -- */
	$('#modifyContacts .adrs-bio-row,#modifyContacts .addNewAddressRow').hide();
	$(document).on("click", ".deleteCurrentAdd", function() {
		$(this).closest('.adrs-bio-row').hide();
		$('.no-contacts-panel').show();
		$('#modifyContacts .addNewAddressRow').hide();
	});
	var addAdditionalContact;
	$(document).on("click", ".addMultipleAddress", function() {
		if ($('#modifyContacts .no-contacts-panel').is(':visible')) {
			return;
		}
		console.log(addAdditionalContact);
		if (addAdditionalContact == "second") {
			$('.resellerContactOuter ul').append('<li><div class="contact-bar"><div class="primary-name text-ellipsis"><span class="fullname">Jane Smith</span><br><span class="company-name">Primary Support</span></div><div class="primary-email text-ellipsis"><span><i class="icon-user-email"></i><a href="mailto: amy@ruckus.com"> amy@ruckus.com</a></span></div><div class="primary-phone-number text-ellipsis"><span><i class="icon-Phone"></i> +1(800)123-4567</span></div><div class="primary-fax text-ellipsis"><span><i class="icon-fax"></i> +1(800)123-4567</span></div><div class="contact-ctrl"><span><a href="javascript:void(0);" class="edit-contact change-btn" data-toggle="modal" data-target="#modifyContacts-tab-panel">Change</a></span><span><a href="javascript:void(0);" class="delete-contact" data-toggle="modal" data-target="#deleteaddedcontact">Delete</a></span></div></div></li>');
		} else if (addAdditionalContact == "third") {
			$('.endCustomerContactOuter ul').append('<li><div class="contact-bar"><div class="primary-name text-ellipsis"><span class="fullname">Jane Smith</span><br><span class="company-name">Primary Support</span></div><div class="primary-email text-ellipsis"><span><i class="icon-user-email"></i><a href="mailto: amy@ruckus.com"> amy@ruckus.com</a></span></div><div class="primary-phone-number text-ellipsis"><span><i class="icon-Phone"></i> +1(800)123-4567</span></div><div class="primary-fax text-ellipsis"><span><i class="icon-fax"></i> +1(800)123-4567</span></div><div class="contact-ctrl"><span><a href="javascript:void(0);" class="edit-contact change-btn" data-toggle="modal" data-target="#modifyContacts-tab-panel">Change</a></span><span><a href="javascript:void(0);" class="delete-contact" data-toggle="modal" data-target="#deleteaddedcontact">Delete</a></span></div></div></li>');
		} else if (addAdditionalContact == "fourth") {
			$('.serviceContactOuter ul').append('<li><div class="contact-bar"><div class="primary-name text-ellipsis"><span class="fullname">Jane Smith</span><br><span class="company-name">Primary Support</span></div><div class="primary-email text-ellipsis"><span><i class="icon-user-email"></i><a href="mailto: amy@ruckus.com"> amy@ruckus.com</a></span></div><div class="primary-phone-number text-ellipsis"><span><i class="icon-Phone"></i> +1(800)123-4567</span></div><div class="primary-fax text-ellipsis"><span><i class="icon-fax"></i> +1(800)123-4567</span></div><div class="contact-ctrl"><span><a href="javascript:void(0);" class="edit-contact change-btn" data-toggle="modal" data-target="#modifyContacts-tab-panel">Change</a></span><span><a href="javascript:void(0);" class="delete-contact" data-toggle="modal" data-target="#deleteaddedcontact">Delete</a></span></div></div></li>');
		} else if (addAdditionalContact == "fifth") {
			$('.additionalContactOuter ul').append('<li><div class="contact-bar"><div class="primary-name text-ellipsis"><span class="fullname">Jane Smith</span><br><span class="company-name">Primary Support</span></div><div class="primary-email text-ellipsis"><span><i class="icon-user-email"></i><a href="mailto: amy@ruckus.com"> amy@ruckus.com</a></span></div><div class="primary-phone-number text-ellipsis"><span><i class="icon-Phone"></i> +1(800)123-4567</span></div><div class="primary-fax text-ellipsis"><span><i class="icon-fax"></i> +1(800)123-4567</span></div><div class="contact-ctrl"><span><a href="javascript:void(0);" class="edit-contact change-btn" data-toggle="modal" data-target="#modifyContacts-tab-panel">Change</a></span><span><a href="javascript:void(0);" class="delete-contact" data-toggle="modal" data-target="#deleteaddedcontact">Delete</a></span></div></div></li>');
		} else {
			if ($('.assignPrimaryBusinessAdd').is(':checked')) {
				$('.billingContactOuter ul').append('<li><div class="contact-bar"><div class="primary-name text-ellipsis"><span class="fullname">Jane Smith</span><br><span class="company-name">Primary Support</span></div><div class="primary-email text-ellipsis"><span><i class="icon-user-email"></i> amy@ruckus.com</span></div><div class="primary-phone-number text-ellipsis"><span><i class="icon-Phone"></i> +1(800)123-4567</span></div><div class="primary-fax text-ellipsis"><span><i class="icon-fax"></i> +1(800)123-4567</span></div><div class="contact-ctrl"><span><a href="javascript:void(0);" class="edit-contact" data-toggle="modal" data-target="#editBillingContact">Change</a></span></div></div></li>');
			};
			if ($('.assignPrimaryBillingAdd').is(':checked')) {
				$('.billingContactOuter ul').append('<li><div class="contact-bar"><div class="primary-name text-ellipsis"><span class="fullname">Jane Smith</span><br><span class="company-name">Primary Support</span></div><div class="primary-email text-ellipsis"><span><i class="icon-user-email"></i> amy@ruckus.com</span></div><div class="primary-phone-number text-ellipsis"><span><i class="icon-Phone"></i> +1(800)123-4567</span></div><div class="primary-fax text-ellipsis"><span><i class="icon-fax"></i> +1(800)123-4567</span></div><div class="contact-ctrl"><span><a href="javascript:void(0);" class="edit-contact" data-toggle="modal" data-target="#editBillingContact">Change</a></span></div></div></li>');
			};
			if ($('.assignServiceToAdd').is(':checked')) {
				$('.serviceContactOuter ul').append('<li><div class="contact-bar"><div class="primary-name text-ellipsis"><span class="fullname">Jane Smith</span><br><span class="company-name">SERVICE TO CONTRACT</span></div><div class="primary-email text-ellipsis"><span><i class="icon-user-email"></i> amy@ruckus.com</span></div><div class="primary-phone-number text-ellipsis"><span><i class="icon-Phone"></i> +1(800)123-4567</span></div><div class="primary-fax text-ellipsis"><span><i class="icon-fax"></i> +1(800)123-4567</span></div><div class="contact-ctrl"><span><a href="javascript:void(0);" class="edit-contact" data-toggle="modal" data-target="#editBillingContact">Change</a></span><span><a href="javascript:void(0);" class="delete-contact" data-toggle="modal" data-target="#deleteaddedcontact">Delete</a></span></div></div></li>');
			};
			if ($('.assignPrimarySupportAdd').is(':checked')) {
				$('.endCustomerContactOuter ul').append('<li><div class="contact-bar"><div class="primary-name text-ellipsis"><span class="fullname">Jane Smith</span><br><span class="company-name">MARKETING DEPARTMENT</span></div><div class="primary-email text-ellipsis"><span><i class="icon-user-email"></i> amy@ruckus.com</span></div><div class="primary-phone-number text-ellipsis"><span><i class="icon-Phone"></i> +1(800)123-4567</span></div><div class="primary-fax text-ellipsis"><span><i class="icon-fax"></i> +1(800)123-4567</span></div><div class="contact-ctrl"><span><a href="javascript:void(0);" class="edit-contact" data-toggle="modal" data-target="#editBillingContact">Change</a></span><span><a href="javascript:void(0);" class="delete-contact" data-toggle="modal" data-target="#deleteaddedcontact">Delete</a></span></div></div></li>');
			};
			if ($('.assignResellerAdd').is(':checked')) {
				$('.resellerContactOuter').show();
				$('.resellerContactOuter ul').append('<li><div class="contact-bar"><div class="primary-name text-ellipsis"><span class="fullname">Jane Smith</span><br><span class="company-name">MARKETING DEPARTMENT</span></div><div class="primary-email text-ellipsis"><span><i class="icon-user-email"></i> amy@ruckus.com</span></div><div class="primary-phone-number text-ellipsis"><span><i class="icon-Phone"></i> +1(800)123-4567</span></div><div class="primary-fax text-ellipsis"><span><i class="icon-fax"></i> +1(800)123-4567</span></div><div class="contact-ctrl"><span><a href="javascript:void(0);" class="edit-contact" data-toggle="modal" data-target="#editBillingContact">Change</a></span><span><a href="javascript:void(0);" class="delete-contact" data-toggle="modal" data-target="#deleteaddedcontact">Delete</a></span></div></div></li>');
			};
		}
		$('#add-contact-succesful .modal-title').text("Contact Added");
		$('#add-contact-succesful .alert-success span').text("Contact has been added succesfully.");
		setTimeout(function() {
			if (addAdditionalContact == "first") {
				$('#add-contact-succesful .modal-title').text("Error");
				$('#add-contact-succesful .success-msg').hide();
				$('#add-contact-succesful .error-msg').show();
			} else {
				$('#add-contact-succesful .success-msg').show();
				$('#add-contact-succesful .error-msg').hide();
			}
			$('#add-contact-succesful').modal('show');
			addAdditionalContact = "";
		}, 200);
	});
	/*$(document).on("click", ".returnContactModel", function(){
		
		setTimeout(function(){
			
			$('body').addClass('modal-open');
			
		},350);
		
	});*/
	$(document).on("click", ".mg-add-contact", function() {
		console.log($(this).hasClass('second-view'));
		if ($(this).hasClass('second-view')) {
			addAdditionalContact = "second";
		};
		if ($(this).hasClass('first-view')) {
			addAdditionalContact = "first";
		};
		if ($(this).hasClass('third-view')) {
			addAdditionalContact = "third";
		};
		if ($(this).hasClass('fourth-view')) {
			addAdditionalContact = "fourth";
		};
		if ($(this).hasClass('fifth-view')) {
			addAdditionalContact = "fifth";
		};
		console.log(addAdditionalContact);
		$('.addNewMgContact, .modal-title').show();
		$('.addNewAddressRow input').prop('checked', false);
		$('.assignBillingAdd,.assignServiceAdd,.assignCustomerAdd').removeClass('active')
		var modal = $('#editBillingContact');
		$('#modifyContacts .no-contacts-panel, .searchAddressBox').show();
		$('#modifyContacts .adrs-bio-row, #modifyContacts .addNewAddressRow, .creatContact').hide();
		$('#modifyContacts .modify-contacts').val('');
		modal.find('.e-name, .e-roll').attr('disabled', false);
		$('#modifyContacts .creatContact').find('input').val('');
		$('#modifyContacts').find('.addMultipleAddress').attr('disabled', true);
	});
	$(document).on("click", ".addNewMgContact", function() {
		$(this).hide();
		$('.addNewAddressRow input').prop('checked', false);
		$('#modifyContacts .no-contacts-panel, .searchAddressBox').hide();
		$('#modifyContacts .adrs-bio-row,#modifyContacts .addNewAddressRow, .creatContact').show();
	});
	$(document).on("click", ".assign-sameadd", function() {
		var thisParent = $(this).closest('.modal-content');
		setTimeout(function() {
			if ($('.assignPrimaryBusinessAdd').is(':checked') || $('.assignPrimaryBillingAdd').is(':checked') || $('.assignPrimarySupportAdd').is(':checked') || $('.assignServiceToAdd').is(':checked') || $('.assignResellerAdd').is(':checked')) {
				if ($('#modifyContacts').find('.creatContact').is(":visible")) {
					$('#modifyContacts').find('.addMultipleAddress').attr('disabled', false);
					$(thisParent).find('.add-billing-contact').attr('disabled', false);
				}
			} else {
				$('#modifyContacts').find('.addMultipleAddress').attr('disabled', true);
				$(thisParent).find('.add-billing-contact').attr('disabled', true);
			}
		}, 300);
	});
	$(document).on('click', '.modifyNewCont', function() {
		$('#modifyContacts .searchAddressBox, .addNewMgContact').hide();
		$('#modifyContacts .creatContact, #modifyContacts .adrs-bio-row').show();
		$('#modifyContacts').find('.addMultipleAddress').attr('disabled', true);
	});
	$(document).on("click", ".edit-contact", function() {
		var editTitle;
		editTitle = $(this).closest('.billing-table').find('.billing-head').text();
		editTitle = editTitle.slice(0, -1);
		var modal = $('#editBillingContact');
		modal.find('.modal-title').text("Edit " + editTitle);
		var email = $(this).closest('li').find('.primary-email > span').text();
		var fname = $(this).closest('li').find('.primary-name > span.fullname').text();
		var comapnyName = $(this).closest('li').find('.primary-name > span.company-name').text();
		var phoneNo = $(this).closest('li').find('.primary-phone-number > span').text();
		var faxNo = $(this).closest('li').find('.primary-phone-number > span').text();
		email = $.trim(email);
		phoneNo = $.trim(phoneNo);
		faxNo = $.trim(faxNo);
		modal.find('.e-name').val(fname);
		modal.find('.e-lname').val("Joe");
		modal.find('.cco-id').val("amyjoe");
		modal.find('.e-roll').val(comapnyName);
		modal.find('.e-email').val(email);
		modal.find('.e-phone').val(phoneNo);
		modal.find('.e-fax').val(faxNo);
		modal.find('.e-coutry').val("America");
		modal.find('.e-company').val("Ruckus Pizza Inc.");
		modal.find('.e-name, .e-roll, .disabledField').attr('disabled', true);
	});
	$(document).on("click", ".delete-contact", function() {
		$(this).closest('tr').remove();
		$('.tipsy').remove();
	});
	/*-- /Manage-contact -- */
	var calculatedFontSize = (window.screen.width * (10 / 1920));
	$('html').css('font-size', calculatedFontSize < 8 ? 8 : calculatedFontSize + "px");
	//$('[data-toggle="tooltip"]').tooltip();	
	var isAttachmentUploaded = false;
	$('.tipsyTop').tipsy({
		gravity: 's'
	});
	$('.tooltipW, .clock-icon, .date-icon').tipsy({
		gravity: 'w'
	});
	$('.tooltipSE').tipsy({
		gravity: 'se'
	});
	$('.tooltipE').tipsy({
		gravity: 'e'
	});
	$('.error-tipsy').tipsy({
		gravity: 's',
		tclass: 'manage-tipsy'
	});
	$(document).on({
		mouseenter: function() {
			$('tr[data-group="' + $(this).data('group') + '"]').addClass('major-tr-hover-state');
		},
		mouseleave: function() {
			$('tr[data-group="' + $(this).data('group') + '"]').removeClass('major-tr-hover-state');
		}
	}, "tr[data-group]");
	
	function sidebarH() {
		var headerHeight = $('.ccw-header').height();
		var windowHeight = $(window).height();
		var sideBarHeight = $('.dashboard-outer-panel > .dashboard-panel').outerHeight();
		if (windowHeight > sideBarHeight) {
			$(".sidebar").find(".filter-panel").height(windowHeight - (headerHeight + 1));
		} else {
			$(".sidebar").find(".filter-panel").height(sideBarHeight + 3);
		}
	};
	setTimeout(function() {
		sidebarH();
	}, 200);
	$(window).resize(function() {
		sidebarH();
	});
	$(document).on("click", ".panel-title, #myTab > li > a", function() {
		setTimeout(function() {
			sidebarH();
		}, 200);
	});
	/* Set Profile Page Left Sidebar Height JS Start */
	function leftbarH() {
		var headerHeight = $('.ccw-header').outerHeight();
		var windowHeight = $(window).outerHeight();
		var sideBarHeight = $('.sidebar-outer-panel > .left-sidebar').outerHeight();
		var rightPanelHeight = $('.sidebar-outer-panel').outerHeight();
		if (windowHeight > sideBarHeight) {
			if (rightPanelHeight > windowHeight) {
				$(".left-sidebar > ul").height(rightPanelHeight);
			} else {
				$(".left-sidebar > ul").height(windowHeight - (headerHeight + 1));
			}
		} else {
			if (rightPanelHeight > sideBarHeight || rightPanelHeight > windowHeight) {
				$(".left-sidebar > ul").height(rightPanelHeight);
			} else {
				$(".left-sidebar").height(windowHeight - (headerHeight + 1));
			}
		}
	};
	setTimeout(function() {
		leftbarH();
	}, 200);
	$(window).resize(function() {
		leftbarH();
	});
	$(document).on("click", ".set-notifications > h3 > i.icon-arrow-up, .left-sidebar ul > li > a", function() {
		setTimeout(function() {
			leftbarH();
		}, 300);
	});
	/* Set Profile Page Left Sidebar Height JS End */
	function isEllipsisActive(e) {
		//console.log(e);
		//console.log(e.offsetWidth + 2, e.scrollWidth);
		return (e.offsetWidth + 2 < e.scrollWidth);
	}
	$(".placeOrderCheck").change(function() {
		if (this.checked) {
			$('.placeOrderBtn').prop("disabled", false);
		} else {
			$('.placeOrderBtn').prop("disabled", true);
		}
	});
	/*-- Additional Contact Detail */
	$(".additional-contact-box").hide();
	$(document).on("click", ".hide-additional-contacts", function() {
		setTimeout(function() {
			$('.hide-additional-contacts').addClass('active');
		}, 200);
		if ($(this).hasClass('active')) {
			setTimeout(function() {
				$('.hide-additional-contacts').removeClass('active');
			}, 500);
			$(".additional-contact-box").slideUp("slow");
			$(this).text('Show Additional Contacts');
		} else {
			$(".additional-contact-box").slideDown("slow");
			$(this).text('Hide Additional Contacts');
		}
	});
	/*-- Additional Contact Detail */
	$(function() {
		$(document).on({
			mouseover: function() {
				//console.log(123);
				if (isEllipsisActive(this)) {
					//console.log(123);
					if (!$(this).hasClass("tooltip-tipsy")) {
						$(this).addClass("tooltip-tipsy");
						$(this).attr("original-title", $.trim($(this).text()));
						if ($(this).hasClass("lastChildEle")) {
							$(this).tipsy({
								gravity: 'se'
							});
						} else {
							$(this).tipsy({
								gravity: 's'
							});
						}
						$(this).delay(100).trigger("mouseenter")
					}
				}
			},
			mouseleave: function() {
				$(this).removeClass("tooltip-tipsy");
				$(this).removeAttr("original-title", $.trim($(this).text()));
			}
		}, ".text-ellipsis");
	});
	$(document).on("click", ".tiny-utility-bar .clone-icon", function() {
		$("#cloneQuote").find(".clone-quote-con").show();
		$("#cloneQuote").find(".cloned-quote-con").hide();
	});
	$(document).on("click", ".clone-btn", function() {
		$(this).closest(".clone-quote-con").hide();
		$(this).closest(".clone-quote-con").next(".cloned-quote-con").show();
	});
	$('.confirm-add-contact').click(function() {
		$('.adition-adrs-link').hide();
		$('.adrs-panel.additional-address').show();
	});
	$('.norecordsbody').show();
	$('.table-responsive .landing-table').find('thead input#checkAll').attr('disabled', true);
	$('.table-widget-panel .configure-btn').click(function() {
		$('.norecordsbody').hide();
		$('.recordsbody, .pagination-bar').show();
		$('.table-responsive .landing-table').find('thead input#checkAll').attr('disabled', false);
	});
	$('.configure-btn').attr('disabled', true);
	$('.product-name-box,.add-to-quote').keyup(function() {
		if ($(this).val() != "") {
			if ($(this).val().length > 2) {
				$('.configure-btn').attr('disabled', false);
			}
		} else {
			$('.configure-btn').attr('disabled', true);
		};
	});
	/* Table Sorting JS */
	$('#landing-table th').find('i:eq(0)').hide();
	$(document).on('click', '.sorting-arrow i', function() {
		if ($(this).closest('table').hasClass('item-table')) {
			return false;
		}
		if (!$(this).closest('th').hasClass('checkbox-col')) {
			$(this).closest('th').removeClass('sorted');
			$(this).closest('th').addClass('sorted');
			$(this).closest('th').find('i').each(function() {
				if (!$(this).hasClass('active')) {
					console.log($(this));
					$(this).closest('.sorting-arrow').find('i:eq(0)').show();
					$(this).closest('.sorting-arrow').find('i:eq(0)').addClass('active');
					$(this).closest('.sorting-arrow').find('i:eq(1)').removeClass('active');
					$(this).closest('.sorting-arrow').find('i:eq(1)').hide();
				} else {
					$(this).closest('.sorting-arrow').find('i:eq(1)').show();
					$(this).closest('.sorting-arrow').find('i:eq(0)').removeClass('active');
					$(this).closest('.sorting-arrow').find('i:eq(1)').addClass('active');
					$(this).closest('.sorting-arrow').find('i:eq(0)').hide();
				}
			});
		}
	});
	/* Tabs js */
	$('.modal-major-tabs ul li a').on("click", function() {
		if ($(this).hasClass('disabled')) {
			return false;
		}
		if (!$(this).closest('li').hasClass('selected')) {
			$(this).closest('ul').find('li').removeClass('selected');
			$(this).closest('li').addClass('selected');
			$(this).closest('.modal-body').find(':checkbox').prop('checked', false);
			$('.search-contact-form').show();
			$('.create-contact-form').hide();
			if (!$(this).closest('li').hasClass('billing-tab')) {
				$(this).closest('.modal-body').find('.form-control.business-contacts').val(selectedBusiness);
				$(this).closest('.modal-content').find('.proceed-btn').attr('disabled', (selectedBusiness ? false : true)).show();
				$(this).closest('.modal-content').find('.add-billing-contact').hide();
			} else {
				$(this).closest('.modal-body').find('.form-control.business-contacts').val(selectedBilling);
				$(this).closest('.modal-content').find('.proceed-btn').attr('disabled', (selectedBilling ? false : true)).hide();
				$(this).closest('.modal-content').find('.add-billing-contact').show();
			}
		}
	});
	// $('.proceed-btn').on("click", function(){
	// 	$('.billing-tab').find('a').trigger('click');
	// });
	/* Create New Contact */
	$('.add-adrs.add-bill-addr').on('click', function() {
		$('#primaryContact').modal('hide');
	});
	$('.submitCancelRqst').on('click', function() {
		$('#cancelQuote').modal('hide');
		$('#cancelConfirmationQuote').modal('show');
		setTimeout(function() {
			$('#cancelConfirmationQuote').modal('hide');
		}, 3000);
	});
	$('.create-contact-form').hide();
	$(document).on('click', '.create-new-contact, .ui-menu-item-wrapper .no-found', function() {
		$(this).hide();
		$('.search-contact-form').hide();
		$('.create-contact-form, .create-contact-form .quote-initiantion-form').show();
		$('.add-billing-contact').prop('disabled', true);
		$('.create-contact-form').find('.form-control').val("");
		if ($(this).closest('.modal').find('.new-adress-form').length) {
			$('.new-adress-form').show();
			showRecomded = true;
			$(this).closest('.modal').find('.add-billing-contact').hide();
			$(this).closest('.modal').find('.add-billing-contact.create-new').show();
		}
		if (isAdditionalContact) {
			$(this).closest('.modal-content').find('.create-contact-form .assign-panel').hide();
		}
	});
	/* Btn unable and disable in Create Contact */
	$('.create-contact-form .form-control, .quote-initiantion-form .form-control').on("keyup", function() {
		if ($(this).val().length) {
			$(this).closest('.modal-content').find('.add-billing-contact').attr('disabled', false);
		} else {
			$(this).closest('.modal-content').find('.add-billing-contact').attr('disabled', true);
		}
	});
	$('.add-new-billing-addrss').attr('disabled', true);
	$('.quote-initiantion-form .form-control').on("keyup", function() {
		if ($(this).val().length) {
			$(this).closest('.modal-content').find('.add-new-billing-addrss').attr('disabled', false);
		} else {
			$(this).closest('.modal-content').find('.add-new-billing-addrss').attr('disabled', true);
		}
	});
	/* Primary Contact */
	$(document).on('click', '.primary-link', function() {
		$('.search-contact-form').show();
		$('.create-contact-form').hide();
	});
	$("#newcontactform").validate({
		rules: {
			"name": {
				required: true
			},
			"lastname": {
				required: true
			},
			"country": {
				required: true
			},
			"company": {
				required: true
			},
			"email": {
				required: true,
				email: true
			},
			"phone": {
				required: true,
				phoneUS: true
			},
			"zipcode": {
				required: true
			}
		},
		/*errorPlacement: function(error, element) {
			
			element.attr("placeholder", "This field is required.");   
			
		}, */
		submitHandler: function(form) { // for demo
			$('.modal-major-tabs ul li.billing-tab a').removeClass('disabled');
			$('.billing-tab').find('a').trigger('click');
			$('.add-billing-contact').prop('disabled', 'disabled');
			$('label.error').remove();
		}
	});
	$("#newcaddreessform").validate({
		rules: {
			"c-name": {
				required: true
			},
			"contactcity": {
				required: true
			},
			"contactcountry": {
				required: true
			}
		},
		submitHandler: function(form) { // for demo
			// $('.modal-major-tabs ul li.billing-tab a').removeClass('disabled');
			//$('.billing-tab').find('a').trigger('click');
			$('.add-billing-contact').prop('disabled', 'disabled');
			$('label.error').remove();
			$('#state-Province, #zipCode, #firstName, #AddressLineone, #AddressLine').removeClass('error');
		}
	});
	$('#newcontactform input[type=text]:not(.business-contacts)').on('click', function() {
		$(this).val("");
	});
	$('.proceed-btn').prop('disabled', true);
	//$('.add-billing-contact').prop('disabled', false);
	$('.errormsg').hide();
	$('.sharecustomer, .deleteItems').attr('disabled', true);
	//$('.filter-panel').hide();
	var filterToggleFlag = false;
	$(document).on('click', '.showfilter', function() {
		if (!$(this).closest('.filter-con').hasClass('active')) {
			$('.dashboard-outer-panel').addClass('active');
			$('.filter-panel').animate({
				width: 'show'
			});
			//$(this).closest('.filter-con').hide();
			$(this).closest('.filter-con').addClass('active');
		} else {
			$('.filter-panel').animate({
				width: 'hide'
			});
			$('.dashboard-outer-panel').removeClass('active');
			$(this).closest('.filter-con').removeClass('active');
		}
	});
	$(document).on('click', '.filter-panel .close', function() {
		$('.filter-panel').animate({
			width: 'hide'
		});
		$('.dashboard-outer-panel').removeClass('active');
		$('.filter-con').removeClass('active');
		//$('.showfilter').trigger('click');
	});
	
	$(document).on('click', 'thead input#checkAll, tr.active-row input', function() {
		if ($(this).is(':checked')) {
			$('.sharecustomer, .deleteItems').removeAttr('disabled'); //enable input
		} else {
			$('.sharecustomer, .deleteItems').attr('disabled', true); //disable input
		}
	});
	$(document).on('click', 'thead input#checkAll', function() {
		if ($(this).is(':checked')) {
			$('tbody.recordsbody, tbody.records').find('tr.active-row input, tr.major-line :checkbox, .minor-line input').prop('checked', true);
			$('.savedraft').attr('disabled', false);
		} else {
			$('tbody.recordsbody, tbody.records').find('tr.active-row input, tr.major-line :checkbox, .minor-line input').prop('checked', false);
			$('.savedraft').attr('disabled', true);
		}
	});
	$('.tile-panel-outr').addClass('disabled');
	$('.table-widget-panel').addClass('disabled');
	$(document).on('change', '.servicecountry', function() {
		if ($('.servicecountry').val() == "Select") {
			$('.tile-panel-outr').addClass('disabled');
			$('.table-widget-panel').addClass('disabled');
		} else {
			$('.tile-panel-outr').removeClass('disabled');
			$('.table-widget-panel').removeClass('disabled');
		};
	});
	var tableHeight = $(".dashboard-panel #landing-table").height();
	$(".dashboard-panel .filter-panel").outerHeight(tableHeight + 20);
	$(".dashboard-panel .filter-panel").width("336");
	$('.aproval-btn').hide();
	$(document).on('click', '.send-btn', function() {
		$('#shareCustomer .successmsg span').text('Success, Your Quote has been sent for approval.');
		$('.aproval-btn').show();
		$('.share-quote-btn').hide();
	});
	$(document).on('click', '.aproval-btn', function() {
		$('div.send-quote-app').hide();
		$('div.sent-quote-aproval').show();
	});
	$(document).on('click', '.sharecustomer', function() {
		$('#shareCustomer .successmsg span').text('Success, Your Quote has been shared with the Customer.');
		$('.aproval-btn').hide();
		$('.share-quote-btn').show();
	});
	/*Add item for comparing*/
	// $('.panel-body').find('.custom-refine-btn').hide();
	$('.addtocompare').click(function() {
		$(this).closest('.panel-body').find('.reset-filter, .resetFilter').show();
		var t = $(this).closest('.panel-body').find('.addtocompare:checked').length;
		if (t < 1) {
			$(this).closest('.panel-body').find('.reset-filter').hide();
		}
		//console.log(t);
		if ($(this).hasClass('custom-val')) {
			if ($(this).is(':checked')) {
				$(this).closest('.panel-body').find('.min, .max, .custom-refine-btn').attr('disabled', false);
				// $(this).closest('.panel-body').find('.custom-refine-btn').show();
			} else {
				$(this).closest('.panel-body').find('.min, .max, .custom-refine-btn').attr('disabled', true);
				//   $(this).closest('.panel-body').find('.custom-refine-btn').hide();
			}
			return;
		} else {
			$(this).closest('.panel-body').find('.min, .max, .custom-refine-btn').attr('disabled', true);
			//$(this).closest('.panel-body').find('.custom-refine-btn').hide();
		}
		var len = $(".filter-bubble-con").find("li").length;
		var i = $('.panel-list-item').find('li').index($(this).closest('li'));
		var d = $(this).attr('data-value');
		var e = $(".filter-bubble-con").find("li").attr('data-value');
		//$('.filter-bubble-con, .clear-filter').show();
		$('.filter-bubble-con').show();
		var name = $('.panel-list-item').find('li').eq(i).find('.label-text').text();
		var nameT = $(this).closest('.panel-default').find('.panel-title > a').clone().children().remove().end().text();
		var nameT = $.trim(nameT);
		//var statusHeading = $(this).closest('.panel-default').find('.panel-heading a').attr('data-head');
		//$(this).closest('li').attr('data-head', statusHeading.trim());
		$(this).closest('li').attr('data-value', d.trim());
		$('.filter-bubble-con').find('li[data-value="' + d + '"]').remove();
		$('.filter-bubble-con').find('li[data-name="' + nameT + '"]').remove();
		if ($(this).is(':checked')) {
			if(!$('.search-results-box').is(':visible')){
				$('.total-results-box').show();
				$('.total-results-box').find('.total-found-result, .bill-to-id').hide();
			}
			if ($(this).is(':checkbox')) {
				if (name == "Custom") {
					return;
				}
				$(".filter-bubble-con > ul").append('<li class="compareTag invoice-tag" value="' + i + '" data-value="' + d + '"><span><strong>' + nameT + ':</strong>' + name + '</span><i class="removecomparingitem icon-circle-close delete-filter tipsyTop"></i></li>');
			} else {
				$(".filter-bubble-con > ul").append('<li data-name="' + nameT + '" class="compareTag invoice-tag" value="' + i + '" data-value="' + d + '"><span><strong>' + nameT + ':</strong>' + name + '</span><i class="removecomparingitem icon-circle-close delete-filter tipsyTop"></i></li>');
			}
			$('.offer-name-list').find('input[data-value="' + d + '"]').prop('checked', true);
		} else if (len <= 1) {
			setTimeout(function() {
				$('.filter-bubble-con').hide().find('li.compareTag').remove();
			}, 500);
		} else {
			console.log(d);
			$('.filter-bubble-con').find('li[data-value="' + d + '"]').remove();
			$('.offer-name-list').find('input[data-value="' + d + '"]').prop('checked', false);
		}
	});
	$('.add-selected').click(function() {
		$('.filter-bubble-con').show();
		$('.offer-name-list input[type=checkbox]').map(function(_, el) {
			console.log($(el).attr('data-value'));
			$('.filter-bubble-con').find('li[data-value="' + $(el).attr('data-value') + '"]').remove();
			if ($(this).is(':checked')) {
				$(".filter-bubble-con > ul").append('<li data-name="Offer Name" class="compareTag invoice-tag" value="222" data-value="' + $(el).attr('data-value') + '"><span><strong>Offer Name:</strong>' + $(el).val() + '</span><i class="removecomparingitem icon-circle-close delete-filter tipsyTop"></i></li>');
				$('.offer-name').find('input[data-value="' + $(el).attr('data-value') + '"]').prop('checked', true);
			} else {
				$('.offer-name').find('li[data-value="' + $(el).attr('data-value') + '"] input').prop('checked', false);
			}
		});
		var c = $('.offer-name-list').find('input:checkbox:checked').length;
		$('.offer-name-h .count-notify').text('(' + c + ')');
	});
	$('.custom-refine-btn').click(function() {
		var min = $(this).closest('.custom-refine').find('.min').val();
		var max = $(this).closest('.custom-refine').find('.max').val();
		if (min == "" || max == "") {
			return;
		};
		$('.filter-bubble-con').show();
		if ($(this).hasClass('monthly-charge')) {
			$('.filter-bubble-con').find('li[data-value="filter13"], li[data-value="filter17"], li[data-value="filter14"], li[data-value="filter15"], li[data-value="filter16"]').remove();
			$(".filter-bubble-con > ul").append('<li data-name="Monthly Charge" class="compareTag invoice-tag" value="222" data-value="filter166"><span><strong>Monthly Charge:</strong>$ ' + min + ' - $ ' + max + '</span><i class="removecomparingitem icon-circle-close delete-filter tipsyTop"></i></li>');
		} else {
			$('.filter-bubble-con').find('li[data-value="filter19"], li[data-value="filter20"], li[data-value="filter21"]').remove();
			$(".filter-bubble-con > ul").append('<li data-name="Due for Renewal" class="compareTag invoice-tag" value="222" data-value="filter166"><span><strong>Due for Renewal:</strong>' + min + '-' + max + ' Days</span><i class="removecomparingitem icon-circle-close delete-filter tipsyTop"></i></li>');
		}
	});
	$('.min, .max, .custom-refine-btn').attr('disabled', true);
	/*remove single item for comparing*/
	$(document).on("click", ".removecomparingitem", function() {
		$(this).closest('.compareTag').remove();
		var e = $(this).closest('li').attr('data-value');
		var len = $(".filter-bubble-con").find("li").length;
		var f = $('.panel-list-item, .offer-name-list').find('li');
		$(f).find('input:checkbox[data-value="' + e + '"], input:radio[data-value="' + e + '"]').prop('checked', false);
		var countX = $(f).find('input:checkbox[data-value="' + e + '"]').closest('.panel-default').find('.panel-heading .count-notify').text();
		$(f).find('input:checkbox[data-value="' + e + '"]').trigger('dblclick');
		console.log(countX);
		countX = countX.replace(/\(|\)/g, '');
		countX = countX == 0 ? 0 : countX - 1;
		$(f).find('input:checkbox[data-value="' + e + '"], input:radio[data-value="' + e + '"]').closest('.panel-default').find('.panel-heading .count-notify').text('(' + countX + ')');
		if (len < 1) {
			$('.addtocompare').prop('checked', false);
			$('.filter-bubble-con').hide();
			$('.status-title').find('.count-notify').text('');
		};
		if (countX < 1) {
			$(f).find('input:checkbox[data-value="' + e + '"], input:radio[data-value="' + e + '"]').closest('.panel-default').find('.reset-filter').hide();
		}
		var c = $('.offer-name-list').find('input:checkbox:checked').length;
		$('.offer-name-h .count-notify').text('(' + c + ')');
	});
	/*remove all items for comparing*/
	$('.clear-filter').click(function() {
		$('.panel-body .reset-filter').hide();
		$('.filter-bubble-con').find('li.compareTag').remove();
		$('.addtocompare').prop('checked', false);
		$('.filter-bubble-con').hide();
		$('.status-title').find('.count-notify').text('');
		$('.offer-name-list input[type=checkbox]').prop('checked', false);
		$('.offer-name-h .count-notify').text('');
	});
	$('.panel-body .reset-filter').hide();
	jQuery('.min, .max').keyup(function() {
		this.value = this.value.replace(/[^0-9\.]/g, '');
	});
	$('.resetFilter').click(function() {
		$(this).closest('.panel-body').find('.addtocompare:checked').trigger('click');
		var d = $(this).closest('.panel-body').find('.addtocompare:checked').attr('data-value');
		$(this).closest('.panel-body').find('.addtocompare').prop('checked', false);
		$(this).hide();
		$('.filter-bubble-con').find('li[data-value="' + d + '"]').remove();
		var len = $(".filter-bubble-con").find("li").length;
		if (len < 1) {
			$('.filter-bubble-con').hide();
		}
	});
	$(document).on('change', '.panel-list-item li input:checkbox, .panel-list-item li input:radio, .invoice-card-box input:radio', function() {
		var totalchecked = $(this).closest('.panel-group').find('input:checked').length;
		var statusOfChecked = $(this).closest('.filter-panel').find('input[name="status[]"]:checked').length;
		var quoteOfChecked = $(this).closest('.filter-panel').find('input[name="quotes[]"]:checked').length;
		var offerOfChecked = $(this).closest('.filter-panel').find('input[name="offerName[]"]:checked').length;
		var monthlyOfChecked = $(this).closest('.filter-panel').find('input[name="monthlyCharge[]"]:checked').length;
		var renewalOfChecked = $(this).closest('.filter-panel').find('input[name="dueRenwal[]"]:checked').length;
		var autorenewalOfChecked = $(this).closest('.filter-panel').find('input[name="autoRenwal[]"]:checked').length;
		var overageOfChecked = $(this).closest('.filter-panel').find('input[name="overage[]"]:checked').length;
		var orderOfChecked = $(this).closest('.filter-panel').find('input[name="order[]"]:checked').length;
		$('.count-notify').show();
		if (statusOfChecked > 0 || quoteOfChecked > 0 || offerOfChecked > 0 || monthlyOfChecked > 0 || renewalOfChecked > 0 || autorenewalOfChecked > 0 || overageOfChecked > 0 || orderOfChecked > 0) {
			if (statusOfChecked > 0) {
				$('.status-title .count-notify').text('(' + statusOfChecked + ')');
			}
			if (quoteOfChecked > 0) {
				$('.quote-title .count-notify').text('(' + quoteOfChecked + ')');
			}
			if (offerOfChecked > 0) {
				$('.offer-title .count-notify').text('(' + offerOfChecked + ')');
			}
			if (monthlyOfChecked > 0) {
				$('.monthly-title .count-notify').text('(' + monthlyOfChecked + ')');
			}
			if (renewalOfChecked > 0) {
				$('.renewal-title .count-notify').text('(' + renewalOfChecked + ')');
			}
			if (autorenewalOfChecked > 0) {
				$('.autorenewal-title .count-notify').text('(' + autorenewalOfChecked + ')');
			}
			if (overageOfChecked > 0) {
				$('.overage-title .count-notify').text('(' + overageOfChecked + ')');
			}
			if (orderOfChecked > 0) {
				$('.order-title .count-notify').text('(' + orderOfChecked + ')');
			}
		} else {};
		if (statusOfChecked == 0 || quoteOfChecked == 0 || offerOfChecked == 0 || monthlyOfChecked == 0 || renewalOfChecked == 0 || autorenewalOfChecked == 0 || overageOfChecked == 0 || orderOfChecked == 0) {
			if (statusOfChecked < 1) {
				$('.status-title .count-notify').hide();
			}
			if (quoteOfChecked < 1) {
				$('.quote-title .count-notify').hide();
			}
			if (offerOfChecked < 1) {
				$('.offer-title .count-notify').hide();
			}
			if (monthlyOfChecked < 1) {
				$('.monthly-title .count-notify').hide();
			}
			if (renewalOfChecked < 1) {
				$('.renewal-title .count-notify').hide();
			}
			if (autorenewalOfChecked < 1) {
				$('.autorenewal-title .count-notify').hide();
			}
			if (overageOfChecked < 1) {
				$('.overage-title .count-notify').hide();
			}
			if (orderOfChecked < 1) {
				$('.order-title .count-notify').hide();
			}
		}
		$('.auth-payment').attr('disabled', false);
	});
	$('input.datepicker').datepicker({
		dateFormat: 'dd-M-yy',
	});
	$(".filter-panel").niceScroll();
	$("#addLineItems .modal-body").niceScroll();
	//$(".invoice-tag-outer").niceScroll();
	$('li.show-less').hide();
	$('ul.showlessbuttons').hide();
	$('.panel-default').each(function() {
		if ($(this).find('ul.panel-list-item li').length > 5) {
			$(this).find('ul.showlessbuttons').show();
		} else {
			$(this).find('ul.showlessbuttons').hide();
		}
		setTimeout(function() {
			$(".filter-panel").getNiceScroll().resize();
		}, 300);
	});
	$(document).on('click', '.seemoreless', function() {
		var $this = $(this);
		if ($this.hasClass('no-show')) {
			return;
		}
		var ulOldheight = $(this).closest('.panel-body').find('ul.panel-list-item').height();
		if ($(this).text() == "View More") {
			$(this).closest('.panel-body').find('ul.panel-list-item').css("max-height", ulOldheight + 30);
			$(this).closest('ul').find('li.show-more').hide();
			$(this).closest('ul').find('li.show-less').show();
			$(this).closest('.panel-body').find(".panel-list-item").niceScroll();
		}
		if ($(this).text() == "View Less") {
			$(this).closest('ul').find('li.show-less').hide();
			$(this).closest('ul').find('li.show-more').show();
			$(this).closest('.panel-body').find('ul.panel-list-item').css("max-height", ulOldheight - 30);
			$(this).closest('.panel-body').find(".panel-list-item").getNiceScroll(0).doScrollTop(0, 100);
			setTimeout(function() {
				$($this).closest('.panel-body').find(".panel-list-item").getNiceScroll().remove();
			}, 500);
		}
	});
	$('a[data-toggle="collapse"]').on('click', function() {
		var objectID = $(this).attr('href');
		if ($(objectID).hasClass('in')) {
			$(objectID).collapse('hide');
		} else {
			$(objectID).collapse('show');
		}
	});
	$('#landing-table tbody > tr').each(function() {
		var trIndex = $(this).index();
		if (trIndex > 6) {
			$(this).find('.action-col').addClass('flyout-top');
		}
	});
	var lastTr = $('.table-flyout tbody > tr').length - 4;
	$('.table-flyout tbody > tr').each(function() {
		var trIndex = $(this).index();
		//console.log(trIndex, lastTr);
		if (trIndex > lastTr) {
			$(this).find('.action-col').addClass('flyout-top');
		}
	});
	$('.earthImg').hide();
	$('.continueBtn, .set-btn').attr('disabled', true);
	var quoteName;
	var quoteDesc;
	var quoteCoutry;
	var img;
	$(document).on('blur', '.quoteName, .quoteDescription', function(event) {
		quoteName = $('.quoteName').val();
		quoteDesc = $('.quoteDescription').val();
		quoteCoutry = $('.quoteCountrySelect select').val();
		if (quoteName != "" && quoteDesc != "") {
			img = true;
		} else {
			img = false;
		};
		/*if($(event.target).hasClass('input')){
			
			if(img){
				
				return;
				
			} 
			
		};*/
		if (quoteName != "" && quoteDesc != "") {
			$('.earthImg').fadeIn(800);
			$('.noteImg').hide();
			img = true;
		} else {
			$('.earthImg').hide();
			$('.noteImg').fadeIn(800);
			img = false;
		};
		if (img && quoteCoutry != "Select") {
			$('.continueBtn').attr('disabled', false);
		} else {
			$('.continueBtn').attr('disabled', true);
		}
	});
	$(document).on('change', '.quoteCountrySelect select', function() {
		setTimeout(function() {
			quoteCoutry = $('.quoteCountrySelect select').val();
			if (img && quoteCoutry != "Select") {
				$('.continueBtn, .set-btn').attr('disabled', false);
				$('.set-btn').addClass('active');
			} else if (quoteCoutry != "Select") {
				$('.set-btn').attr('disabled', false);
				$('.set-btn').addClass('active');
			} else {
				$('.continueBtn, .set-btn').attr('disabled', true);
				$('.set-btn').removeClass('active');
				
			}
			
		}, 300);
	});
	$(document).on('click focus', '.quoteName, .quoteDescription', function() {
		$('.earthImg').hide();
		$('.noteImg').fadeIn(800);
	});
	$(document).on('click', '.quoteCountrySelect select', function() {
		$('.earthImg').fadeIn(800);
		$('.noteImg').hide();
	});
	$('.records').hide();
	$('.config-add-btn, .proceed-to-contact-btn').attr('disabled', true);
	$(document).on('change', '.quote-product, .quote-qty', function() {
		var quoteproduct = $('.quote-product').val();
		var quoteqty = $('.quote-qty').val();
		if (quoteproduct != "" && quoteqty != "") {
			$('.config-add-btn').attr('disabled', false);
		} else {
			$('.config-add-btn').attr('disabled', true);
		}
	});
	var itemsVal = 1;
	$(".caretUp").click(function() {
		if (itemsVal >= 1) {
			itemsVal++;
		}
		$(this).closest(".select-product").find('input.quote-qty').val(itemsVal);
	});
	$(".caretDown").click(function() {
		if (itemsVal > 1) {
			itemsVal--;
		} else if (itemsVal == 0) {
			itemsVal = 1;
		}
		$(this).closest(".select-product").find('input.quote-qty').val(itemsVal);
	});
	$('.table-pagination.pagination-bar').hide();
	$('.max-user').hide();
	$('.user-list').click(function() {
		// $(this).toggleClass('active');	
		if ($(".user-list").hasClass("active")) {
			$(this).removeClass('active');
			$(this).text('View More');
			$('.max-user').hide();
			$('.min-user').show();
			$('.empty-dots').show();
		} else {
			$(this).addClass('active');
			$(this).text('View Less');
			$('.min-user').hide();
			$('.empty-dots').hide();
			$('.max-user').show();
		}
	});
	$(document).on('click', '.config-add-btn', function() {
		if ($('.add-to-quote').val() == "CIS-IPICS-VMA") {
			$('.fileAlreadyAdded').show();
			$('.norecords').show();
			$('.records, .table-pagination.pagination-bar').hide();
			return;
		} else {
			$('.fileAlreadyAdded').hide();
			$('.records, .table-pagination.pagination-bar').show();
			$('.norecords').hide();
		}
		$('.records, .table-pagination.pagination-bar').show();
		$('.norecords').hide();
		setTimeout(function() {
			$('.proceed-to-contact-btn').attr('disabled', false);
			$('.item-table').find('input#checkAll').attr('disabled', false);
		}, 200);
	});
	$(document).on('click', '.item-table tbody tr input', function() {
		if ($(this).is(':checked')) {
			$('.controlsBtn').attr('disabled', false);
		} else {
			$('.controlsBtn').attr('disabled', true);
		}
	});
	$('.controlsBtn').attr('disabled', true);
	function addCommas(nStr){
		nStr += '';
		x = nStr.split('.');
		x1 = x[0];
		x2 = x.length > 1 ? '.' + x[1] : '';
		var rgx = /(\d+)(\d{3})/;
		while (rgx.test(x1)) {
			x1 = x1.replace(rgx, '$1' + ',' + '$2');
		}
		return x1 + x2;
	}
	window.selectedCurrencies=[];
	function calculateTotal(checkbox,a){
		var total = 0.00;
		window.selectedCurrencies=[];
		$(checkbox).closest("table").find('tbody tr :checkbox:checked').each(function(){
			var balanceAmt=$(this).closest('tr').find('.balance-amt').text();
			var currency=$(this).closest('tr').find('.currency:eq(0)').text();
			window.selectedCurrencies.push(currency);
			balanceAmt=balanceAmt.replace(',','');
			total=parseInt(total)+parseInt(balanceAmt);
			$('.total-amt').text(addCommas(total)+'.00');
		});

		if(a){
			$(checkbox).closest("table").find('tbody tr').each(function(){
				var balanceAmt=$(this).closest('tr').find('.balance-amt').text();
				var currency=$(this).closest('tr').find('.currency:eq(0)').text();
				window.selectedCurrencies.push(currency);
				balanceAmt=balanceAmt.replace(',','');
				total=parseInt(total)+parseInt(balanceAmt);
				$('.total-amt').text(addCommas(total)+'.00');
			});
		}
		window.selectedCurrencies=$.unique(window.selectedCurrencies);
		console.log('selectedCurrencies:',window.selectedCurrencies);
	}
	$(document).on('click', 'tbody input:checkbox', function() {
		var checkboxL = $(this).closest(".table > tbody").find("input:checkbox").not(":disabled").length;
		var activeCheckbox = $(this).closest(".table > tbody").find("input:checked").length;
		if (checkboxL == activeCheckbox) {
			$(this).closest(".table").find("th input:checkbox").prop('checked', true);
		} else {
			$(this).closest(".table").find("th input:checkbox").prop('checked', false);
		}
		if (activeCheckbox > 0 && !$(this).hasClass('share-model-checkbox')) {
			$('.controlsBtn').attr('disabled', false);
		} else {
			$('.controlsBtn').attr('disabled', true);
		}
		
		//payment-chkbox
		var paymentCheckTd=$(this).closest("td.payment-chkbox");
		if(paymentCheckTd.length>0){
			if($(this).is(':checked')){
				var balanceAmt=paymentCheckTd.prev('td').find('.balance-amt').text();
				paymentCheckTd.next('td').find('.amt-search-panel input[type="text"]').val(balanceAmt);
			}else{
				paymentCheckTd.next('td').find('.amt-search-panel input[type="text"]').val('');
			}
			if (activeCheckbox > 0) {
				$('.proceed-to-pay').attr('disabled', false);
			} else {
				$('.proceed-to-pay').attr('disabled', true);
			}
			calculateTotal($(this));
		}
		
		var checkedLen = $(this).closest('table').find('tr input:checked').length;
		
		if(checkedLen == 0){
			$('.total-amt').text('0.00');
		}
		
	});

	$(document).on('keyup keydown click', '.invoice-to-pay table tr .amt-search-panel input[type="text"]', function(e) {
        if (e.which != 8 && e.which != 0 && (e.which < 48 || e.which > 57)) {
            return false;
		}

		if( $(this).closest('tr').find('input[type="checkbox"]').is(':checked') ){
			$(this).closest('tr').find('input[type="checkbox"]').trigger('click').attr('checked', false);
		}

		var amt = $(this).val();
        var balanceAmt = $(this).closest('tr').find('.balance-amt').text();
        var total = 0.00;

        balanceAmt=balanceAmt.replace(',','');
        total = parseInt(total)+parseInt(balanceAmt);

        if(total == amt){
            $(this).closest('tr').find('input[type="checkbox"]').prop('checked', true);
        }else{
            $(this).closest('tr').find('input[type="checkbox"]').prop('checked', false);
		}

        if(amt != ""){
            $(this).closest('tr').addClass('rowactive');
        }else{
            $(this).closest('tr').removeClass('rowactive');
		}

		var checkbox = $(this).closest('table').find('tbody tr input[type="checkbox"]').length;
		var checkedbox = $(this).closest('table').find('tbody tr input[type="checkbox"]:checked').length;
		
		if(checkbox == checkedbox){
			$(this).closest('table').find('thead input[type="checkbox"]').prop('checked', true);
		}else{
			$(this).closest('table').find('thead input[type="checkbox"]').prop('checked', false);
		}
		
        var a = $(this).closest('table').find('tr.rowactive').length;

       // setTimeout(function(){
            if(a>0){
                $('.proceed-to-pay').attr('disabled', false);
            }else{
				$('.proceed-to-pay').attr('disabled', true);
				$('.total-amt').text('0.00');
            }
		//},300);
		
	});
	
	$(document).on('click', '#changeLanguage .btn-primary', function(e) {
		var lang = $('#changeLanguage').find('input:checked').closest('li').text();
		lang = lang.trim();
		$('.acc-language a').text('Change language: ' + lang);
	});


    $(document).on('blur', '.amt-search-panel input[type="text"]', function(e) {
		calculateTotal($(this),true);
        $('.invoice-to-pay table tbody tr').each(function(){
            var amt = $(this).find('input[type="text"]').val();
            if(amt != ""){
                amt = amt.split(".");
                $(this).find('input[type="text"]').val(addCommas(amt[0])+'.00');
            }
        });

        var a = $(this).closest('table').find('tr.rowactive').length;

        setTimeout(function(){
            if(a>0){
                $('.proceed-to-pay').attr('disabled', false);
            }else{
				$('.proceed-to-pay').attr('disabled', true);
				$('.total-amt').text('0.00');
            }
		},300);
    });

	/*Proceed to Pay Page*/
	$(document).on("click", ".proceed-to-pay", function(e) {
		if(window.selectedCurrencies.length==1){
			$('.curreny-alert').hide();
			window.location.href = 'paid-invoice.html';
		}else{
			//show Error;
			$('.curreny-alert').show();
		}
	});
	/*Proceed to Pay Page*/
	/*Paid Invoices*/
	var confirmPaymentModal=$('#confirmPayment');
	$(document).on("click", '[data-target="#confirmPayment"]', function(e) {
		setTimeout(function(){
			confirmPaymentModal.find('.alert-success,.confirm-proceed-ok').addClass('hide');
			confirmPaymentModal.find('.confirm-proceed,.invoice-payment-options').removeClass('hide');
		},500);
	});
	$(document).on("click", "#confirmPayment .confirm-proceed", function(e) {
		confirmPaymentModal.find('.invoice-payment-options').addClass('hide');
		confirmPaymentModal.find('.alert-success,.confirm-proceed-ok').removeClass('hide');
		$(this).addClass('hide');
	});
	
	/*Paid Invoices*/
	
	/*-- History Page -- */
	$(".history-table").find(".minnor-line").hide();
	/*-- /History Page -- */
	$(".item-table tbody").find(".minner-line, .subTotal-row").hide();
	$(document).on("click", ".expand-all-rows", function() {
		$(this).toggleClass("expanded-all");
		if ($(this).hasClass("expanded-all")) {
			$(".item-table tbody").find("tr.minner-line, tr.subTotal-row").show();
			$(".item-table tbody").find(".major-line .expand-row-arrow").addClass("expanded");
			$(".item-table tbody").find(".major-line").addClass("row-expanded");
		} else {
			$(".item-table tbody").find("tr.minner-line, tr.subTotal-row").hide();
			$(".item-table tbody").find(".major-line .expand-row-arrow").removeClass("expanded");
			$(".item-table tbody").find(".major-line").removeClass("row-expanded");
		}
	});
	$(".major-line .expand-row-arrow").on("click", function() {
		$(this).toggleClass("expanded");
		if ($(this).hasClass("expanded")) {
			$(this).closest("tr").nextUntil(".major-line", ".minner-line, .subTotal-row, .minnor-line").show();
			$(this).closest(".major-line").addClass("row-expanded");
		} else {
			$(this).closest("tr").nextUntil(".major-line", ".minner-line, .subTotal-row, .minnor-line").hide();
			$(this).closest(".major-line").removeClass("row-expanded");
		}
		var totalRows = $(this).closest('tbody').find('.major-line .expand-row-arrow').not('.disabled').length;
		var expandedRows = $(this).closest('tbody').find('.major-line.row-expanded .expand-row-arrow').not('.disabled').length;
		
		if(totalRows == expandedRows){
			$('.expand-all-rows').addClass("expanded-all");
		}else{
			$('.expand-all-rows').removeClass("expanded-all");
		}
	});
	
	$(document).one('focus.textarea', '.quoteDescription' , '.attachment-textarea', function () {
		var savedValue = this.value;
		this.value = '';
		this.baseScrollHeight = this.scrollHeight;
		this.value = savedValue;
	}).on('input.textarea', '.quoteDescription', function () {
		var minRows = this.getAttribute('data-min-rows') | 0,
		rows;
		this.rows = minRows;
		rows = Math.ceil((this.scrollHeight - this.baseScrollHeight) / 16);
		this.rows = minRows + rows;
		if ($(this).val() != "") {
			$(this).addClass('active');
		} else {
			$(this).removeClass('active');
		}
	});
	
	// var tesxtarea = document.querySelector('.autoTextarea');
	
	
	
	
	var tesxtarea = document.querySelector('.autoTextarea');
	if(tesxtarea){
		tesxtarea.addEventListener('keydown', autosize);
		
		function autosize(){
			var el = this;
			setTimeout(function(){
				el.style.cssText = 'height:auto; padding:0';
				// for box-sizing other than "content-box" use:
				// el.style.cssText = '-moz-box-sizing:content-box';
				el.style.cssText = 'height:' + el.scrollHeight + 'px';
			},0);
		}
	}
	
	$('.add-contact-list').hide();
	var updateContactname;
	var updateContactfirstName;
	var updateContactlastName;
	var updateContactCountry;
	var updateContactCompany;
	var updateContactEmail;
	var updateContactPhone;
	var updateContactZip = "222888";
	var updateContactUserId;
	var indexVal;
	$('.selected-billing-add, .selected-shipping-add, .adrs-box-outr').hide();
	//$('.addNewContact').attr('disabled', true);
	$('.addNewContact').on('click', function() {
		$('.create-new-contact').show();
		$('.create-contact-form, .contact-outr-box .adrs-panel-outr, .contact-type-row, .address-con, .usesameaddressouter').hide();
		$('.search-contact-form,.search-panel').show();
		address = indexVal = -1;
		$('.search-contact-form').find('.business-contacts').val("");
		$('.no-contacts-panel').show();
		// $('.shipping-adrs-box-outr, .address-con, .usesameaddressouter').hide();
	});
	$('.add-bill-addr,.add-contact-txt').on('click', function() {
		if ($(this).hasClass('add-mass-cnt-add')) {
			return;
		}
		$('.create-new-contact').show();
		$('#primaryContacts').find('.add-bill-addrNew').show();
		var title = $(this).text();
		// console.log(title);
		if (title == "Add Service To Address ") {
			$('#primaryContacts .modal-title').text("Add Service Address");
		} else {
			$('#primaryContacts .modal-title').text('Add Billing Address');
		};
		address = -1;
		isAdditionalContact = false;
		var contactType = $(this).attr('data-contact-type');
		if ($(this).hasClass('add-bill-addr')) {
			address = 1;
		}
		if ($(this).hasClass('add-additional')) {
			isAdditionalContact = true;
		}
		$('.shipping-adrs-box-outr').hide();
		$('.address-billto,.user-contacts').removeClass('active');
		$(this).closest('.address-billto').addClass('active');
		$(this).closest('.user-contacts').addClass('active');
		setTimeout(function() {
			var openedModal = $('.modal.fade.in');
			openedModal.find('.search-panel,.no-contacts-panel,.search-contact-form').show();
			openedModal.find('.contact-type-row,.internal-card .adrs-panel-outr,.create-contact-form,.new-adress-form').hide();
			openedModal.find('.search-panel input[type="text"]').val('');
			if (address == 1) {
				openedModal.find('.assign-panel').show();
			} else {
				openedModal.find('.assign-panel').hide();
			}
			openedModal.find('.modal-title,.address-outer.remendation-row,.add-billing-contact.save,.add-billing-contact.create-new').hide();
			openedModal.find('.add-billing-contact.search').show();
			if (isAdditionalContact) {
				openedModal.find('.modal-title.additional').show()
			} else {
				openedModal.find('.modal-title.search-add').show()
			}
			openedModal.find('.switch button').removeClass('active');
			if (contactType == 'business') {
				openedModal.find('.search-contact-form .switch:eq(0) button,.create-contact-form .switch:eq(0) button').addClass('active')
			} else if (contactType == 'billing') {
				openedModal.find('.search-contact-form .switch:eq(1) button,.create-contact-form .switch:eq(1) button').addClass('active')
			}
			openedModal.find('#massPrimaryContacts .modal-title').show();
		}, 500)
		openedModal.find('#massPrimaryContacts .modal-title').show();
	});
	$('.add-ship-addr').on('click', function() {
		address = 2;
		$('.shipping-adrs-box-outr').hide();
	});
	$('.addaddressestopage, #newcaddreessform .swith-panel').hide();
	var addressAdd;
	$('.addressAdd').on('click', function() {
		$('.addaddressestopage').hide();
		$('.add-new-billing-addrss, #newcaddreessform .swith-panel').show();
		$('.quote-initiantion-form').show();
		$('.quote-initiantion-form .form-control').val("");
		$('.address-outer').hide();
		addressAdd = $(this).find('a.add-contact-txt').text();
		$('#billingAddress .modal-title').text(addressAdd);
		if (addressAdd == "Add Billing Address ") {
			$('#newcaddreessform .swith-panel .switch-label').text('Assign this Address as Service To Address');
		} else {
			$('#newcaddreessform .swith-panel .switch-label').text('Assign this Address as Billing Address');
		}
	});
	$('.add-new-billing-addrss').on('click', function() {
		if ($('#newcaddreessform').valid()) {
			$('#newcaddreessform .form-group').removeClass('error');
			$('.quote-initiantion-form').hide();
			$('.address-outer').show();
			//$('.assign-sameadd').addClass('active'); 
			$('.addaddressestopage').show();
			$(this).hide();
		} else {
			$('#newcaddreessform .form-control, #newcaddreessform .c-country').each(function() {
				var $this = $('#newcaddreessform .form-control');
				if ($(this).hasClass('error') && ($(this).hasClass('c-city') || $(this).hasClass('c-name') || $(this).hasClass('c-country'))) {
					$(this).closest('.form-group:not(.provisning-cntct)').addClass('error');
				} else {
					$(this).closest('.form-group').removeClass('error');
				}
				setTimeout(function() {
					$('#AddressLineone, #state-Province, #AddressLine, #zipCode').removeClass('error');
				}, 10);
			});
			return;
		}
	});
	$(document).on('keyup focus blur', '#AddressLineone, #state-Province, #AddressLine, #zipCode', function() {
		$(this).removeClass('error');
		$(this).closest('.form-group').removeClass('error');
		if ($(this).val() == "") {
			$(this).removeClass('error');
			$(this).closest('.form-group').removeClass('error');
		}
	});
	$('.addaddressestopage').on('click', function() {
		if ($('.assign-sameadd').hasClass('active')) {
			$('.selected-billing-add, .selected-shipping-add').show();
			$('.blank-shipping-add, .blank-billing-add').hide();
		} else {
			if (addressAdd == "Add Billing Address ") {
				$('.selected-billing-add').show();
				$('.blank-billing-add').hide();
				$('.blank-shipping-add').find('.copy-adrs-link').show();
			} else {
				$('.selected-shipping-add').show();
				$('.blank-shipping-add').hide();
				$('.blank-billing-add').find('.copy-adrs-link').show();
			}
		}
	});
	$(document).on('click', '.copy-adrs-link', function(evt) {
		evt.stopPropagation();
		if ($(this).text() == "Same as Bill To Address") {
			$(this).closest('.blank-shipping-add').hide();
			$('.selected-shipping-add').show();
			$(this).closest('.add-contact-panel').hide();
			$(this).closest('.address-billto').find('.addres-box-outr').show();
			$(this).closest('.user-contacts').find('.addres-box-outr').show();
			$(this).closest('.addres-box-outr').removeClass('error');
		} else {
			$(this).closest('.blank-billing-add').hide();
			$('.selected-billing-add').show();
			$(this).closest('.add-contact-panel').hide();
			$(this).closest('.address-billto').find('.addres-box-outr').show();
			$(this).closest('.user-contacts').find('.addres-box-outr').show();
			$(this).closest('.addres-box-outr').removeClass('error');
		}
	});
	$('.add-billing-contact.create-new').on('click', function() {
		if ($('#newcontactform').valid()) {
			$(this).hide();
			$(this).closest('.modal').find('.new-adress-form').hide();
			$(this).closest('.modal').find('.remendation-row,.add-billing-contact.save').show();
		}
	});
	$('.add-billing-contact').on('click', function() {
		var title = $(this).closest('.modal.custom-popup.fade').find('.modal-title:visible').text();
		if (title == "Add Billing Address") {
			if ($(this).hasClass('search')) {
				$('.address-billto.active').find('.addres-box-outr').show();
				$('.address-billto.active').find('.add-contact-panel').hide();
			} else if ($(this).hasClass('save')) {
				$('.address-billto').find('.addres-box-outr').show();
				$('.address-billto').find('.add-contact-panel').hide();
			}
		} else if (title == "Add Service Address") {
			if ($(this).hasClass('search')) {
				$('.address-billto.box-shadow-xl').find('.addres-box-outr').show();
				$('.address-billto.box-shadow-xl').find('.add-contact-panel').hide();
			} else if ($(this).hasClass('save')) {
				$('.address-billto.box-shadow-xl').find('.addres-box-outr').show();
				$('.address-billto.box-shadow-xl').find('.add-contact-panel').hide();
			}
		}
		if (title == "Add Additional Contact") {
			$("ul.additional-contact-list").append('<li><div class="contact-bar"><div class="primary-name text-ellipsis"><span class="fullname">Amy</span><br><span class="company-name">Ruckus Pizza Inc.</span></div><div class="primary-number text-ellipsis"><span><i class="icon-user-ccoid"></i> amy</span></div><div class="primary-email text-ellipsis"><span><i class="icon-user-email"></i> amy@ruckus.com</span></div><div class="primary-phone-number text-ellipsis"><span><i class="icon-Phone"></i> (402) 737-4932</span></div><div class="primary-state text-ellipsis"><span><i class="icon-user-location"></i> United States</span></div><div class="contact-ctrl"><span><a href="javascript:void(0);" class="change-contact" data-toggle="modal" data-target="#billingContacts">Change</a></span><span><a href="javascript:void(0);" class="delete-contact" data-toggle="modal" data-target="#deleteaddedcontact">Delete</a></span></div></div></li>');
			return;
		};
		if ($(this).hasClass('create-new')) {
			return false;
		}
		if (!$('.user-contacts.active').length) {
			$('.addres-box-outr.quote-contact-info-list').show();
		}
		if (isBillingAddress) {
			$('.address-billto.active').find('.add-contact-panel').hide();
			$('.address-billto.active').find('.addres-box-outr').show();
			$('.address-billto.active').removeClass('error');
			$('.address-outer .add-contact-panel:visible').find('.copy-adrs-link').show();
			$('.address-billto').removeClass('active');
		}
		if (isUserContact) {
			var flag = ".active";
			if ($('#billingContacts').find('.switch.business button.active').length && $('#billingContacts').find('.switch.billing button.active').length) {
				flag = '';
			}
			$('.user-contacts' + flag).find('.add-contact-panel').hide();
			$('.user-contacts' + flag).find('.addres-box-outr').show();
			$('.user-contacts .add-contact-panel:visible').find('.copy-adrs-link').show();
			$('.user-contacts').removeClass('active');
		}
		if (address >= 2) {
			$('.selected-shipping-add').show();
			$('.blank-shipping-add').hide();
			if ($('.selected-billing-add').is(':visible')) {
				$('.addNewContact').attr('disabled', false);
			}
		} else if (address >= 1) {
			$('.selected-billing-add').show();
			$('.blank-billing-add').hide();
			if ($('input.use-same-adrs').is(':checked')) {
				$('.selected-shipping-add').show();
				$('.blank-shipping-add').hide();
			};
			if ($('.selected-shipping-add').is(':visible')) {
				$('.addNewContact').attr('disabled', false);
			};
		} else {
			var activetab = $('.modal-major-tabs').find('.selected').text();
			setTimeout(function() {
				var activeerror = $('.create-contact-form .error:visible').length / 2;
				$('.errormsg').find('span').text('Primary ' + activetab + 'Contact has ' + activeerror + ' errors.');
			}, 200);
			if ($('#newcontactform').valid()) {
				$('.errormsg').hide();
				$('.modal-major-tabs ul li.billing-tab a').removeClass('disabled');
				$('.proceed-btn').prop('disabled', false);
				$('.add-billing-contact').prop('disabled', false);
				$('.blankdiv-contact-panel').hide();
				$('.add-contact-list').show();
				var country = $('.create-contact-form').find('.c-country').val();
				if (!country) {
					country = 'United States';
				}
				//selectedContactEmail =  $(selectedContactEmail).find("<strong>").remove();
				if (indexVal > -1) {
					var name = $('.create-contact-form').find('.c-name').val();
					var lastname = $('.create-contact-form').find('.c-lastname').val();
					var company = $('.create-contact-form').find('.c-company').val();
					var businessEmail = $('.create-contact-form').find('.c-businessEmail').val();
					var userId = $('.create-contact-form').find('.c-userId').val();
					var phoneNo = $('.create-contact-form').find('.c-phoneNo').val();
					$("ul.contact-info-list").find("li").eq(indexVal).find('.fullname').text(name + ' ' + lastname);
					$("ul.contact-info-list").find("li").eq(indexVal).find('.company-name').text(company);
					$("ul.contact-info-list").find("li").eq(indexVal).find('.primary-email a').text(businessEmail);
					$("ul.contact-info-list").find("li").eq(indexVal).find('.primary-phone-number a').text(phoneNo);
					$("ul.contact-info-list").find("li").eq(indexVal).find('.primary-state span').text(country);
					$("ul.contact-info-list").find("li").eq(indexVal).find('.primary-number span').text(userId);
				} else {
					var r = /<(\w+)[^>]*>.*<\/\1>/gi;
					//selectedContactEmail.replace(r,"");
					var contactType = $('input[name="contactType"]:checked').val();
					if (!contactType) {
						contactType = "Primary Billing Contact";
						$('input[name="Additional"]').attr('checked', true);
					}
					if ($('.create-contact-form:visible').length) {
						$('.newcontactlistouter').show();
						var name = $('.create-contact-form').find('.c-name').val();
						var lastname = $('.create-contact-form').find('.c-lastname').val();
						country = 'United States';
						var company = $('.create-contact-form').find('.c-company').val();
						var businessEmail = $('.create-contact-form').find('.c-businessEmail').val();
						var userId = $('.create-contact-form').find('.c-userId').val();
						$('.create-contact-form input[name="contactType"]:checked').each(function(index, elem) {
							$("ul.contact-info-list").append('<li><div class="contact-bar"><div class="primary-business"> <i class="contact-icon bussiness"></i> <span>' + contactType + '</span> </div><div class="primary-name"><span class="fullname">' + name + ' ' + lastname + '</span><span class="company-name">' + company + '</span></div><ul class="org-info"><li class="country"><i class="icon-user-ccoid"></i> <span>jsmith</span></li><li class="contact"><i class="icon-user-email"></i> <a href="mailto:jsmith@cisco.com">jsmith@cisco.com</a></li><li class="country"><i class="icon-Phone"></i> (402) 737-4932 </li><li class="email"><i class="icon-user-location" style="margin-top: -2px;"></i> <span >' + country + '</span></li></ul><div class="contact-ctrl"><i class="icon-delete-new tipsyTop removecomparingitem" title="Delete"></i></div></div></li>');
						});
					} else {
						$('.newcontactlistouter').show();
						if ($('input[value="Primary Business"]').is(':checked') || $('input[value="Primary Billing"]').is(':checked') || $('input[value="Additional"]').is(':checked')) {
							$('.contact-type-row input[name="contactType"]:checked').each(function(index, elem) {
								$('.newcontactlistouter').show();
								$("ul.contact-info-list").append('<li><div class="contact-bar"><div class="primary-business"> <i class="contact-icon bussiness"></i> <span>' + contactType + '</span> </div><div class="primary-name"><span class="fullname">' + selectedBusiness + '</span><span class="company-name">Ruckus Pizza Inc.</span></div><ul class="org-info"><li class="country"><i class="icon-user-ccoid"></i> <span>jsmith</span></li><li class="contact"><i class="icon-user-email"></i> <a href="mailto:jsmith@cisco.com">jsmith@cisco.com</a></li><li class="country"><i class="icon-Phone"></i> (402) 737-4932 </li><li class="email"><i class="icon-user-location" style="margin-top: -2px;"></i> <span >' + country + '</span></li> </ul><div class="contact-ctrl"><i class="icon-delete-new tipsyTop delete-contact" title="Delete" data-toggle="modal" data-target="#deleteaddedcontact"></i></div></div></li>');
							});
						} else {
							if (!$(".search-contacts").length) {
								$("ul.contact-info-list").append('<li><div class="contact-bar"><div class="primary-business"> <i class="contact-icon bussiness"></i> <span>Primary <br>BILLING CONTACT</span> </div><div class="primary-name"><span class="fullname">John Smith</span><span class="company-name">Ruckus Pizza Inc.</span></div><ul class="org-info"><li class="country"><i class="icon-user-ccoid"></i> <span>jsmith</span></li><li class="contact"><i class="icon-user-email"></i> <a href="mailto:jsmith@cisco.com">jsmith@cisco.com</a></li><li class="country"><i class="icon-Phone"></i> (402) 737-4932 </li><li class="email"><i class="icon-user-location" style="margin-top: -2px;"></i> <span >United State</span></li> </ul><div class="contact-ctrl"><i class="icon-delete-new tipsyTop removecomparingitem" title="Delete"></i></div></div></li>');
							} else {
								$("ul.contact-info-list").append('<li><div class="contact-bar"><div class="primary-name text-ellipsis"><span class="fullname">Chris</span><br><span class="company-name">Ruckus Pizza Inc.</span></div><div class="primary-number text-ellipsis"><span><i class="icon-user-ccoid"></i> chris</span></div><div class="primary-email text-ellipsis"><span><i class="icon-user-email"></i> chris@ruckus.com</span></div><div class="primary-phone-number text-ellipsis"><span><i class="icon-Phone"></i> (402) 737-4932</span></div><div class="primary-state text-ellipsis"><span><i class="icon-user-location"></i> United States</span></div><div class="contact-ctrl"> <span><a href="javascript:void(0);" class="change-contact" data-toggle="modal" data-target="#billingContacts">Change</a></span> <span><a href="javascript:void(0);" class="delete-contact">Delete</a></span> </div></div></li>');
							}
						}
					}
					setTimeout(function() {
						$('.add-billing-contact').attr('disabled', true);
					}, 200);
					if ($('.contact-info-list li').length) {
						$('.proceed-to-contact-btn').attr('disabled', false);
					};
					$('.tipsyTop').tipsy({
						gravity: 's'
					});
				}
			} else {
				$('#newcontactform .form-control, #newcontactform .c-country').each(function() {
					var $this = $('#newcontactform .form-control');
					if ($(this).hasClass('error')) {
						$(this).closest('.form-group:not(.provisning-cntct)').addClass('error');
					} else {
						$(this).closest('.form-group').removeClass('error');
					}
					//$('#newcontactform').find('.form-group').addClass('error');
				});
				$('label.error, #phoneNumber-error, #businessEmail-error, #country-error').remove();
				$('label.error, #phoneNumber-error, #businessEmail-error, #country-error').remove();
				
				$('.errormsg').show();
				$('.proceed-btn').prop('disabled', 'disabled');
				$('.add-billing-contact').prop('disabled', 'disabled');
			}
		}
	});
	$(document).on('click', '.change-contact', function() {
		var modal = $('#billingContacts');
		modal.addClass('change-contact-modal');
		modal.find('.add-billing-contact').attr('disabled', false);
		modal.find('.search-contact-form,.contact-type').hide();
		modal.find('.modal-title').hide();
		modal.find('.modal-title.change-additional').show();
		modal.find('.divTitle').hide();
		modal.find('.divTitle.edit').show();
		modal.find('.create-contact-form').show();
		var email = $(this).closest('li').find('.primary-email span').text();
		var fname = $(this).closest('li').find('.primary-name .fullname').text();
		var lname = $(this).closest('li').find('.primary-name .fullname').text();
		var company = $(this).closest('li').find('.primary-name .company-name').text();
		var phone = $(this).closest('li').find('.primary-phone-number span').text();
		modal.find('.email').val(email);
		modal.find('.fname').val(fname);
		modal.find('.lname').val('Smith');
		modal.find('.c-company').val(company);
		modal.find('.c-phoneNo').val(phone);
	});
	$(document).on('click', '.add-new-billing-contact', function() {
		$('#billingContacts').find('.contact-type').hide();
		$('#billingContacts').find('.divTitle').hide();
		$('#billingContacts').find('.divTitle.add').show();
	});
	$(document).on('keyup blur', '.c-businessEmail, .c-phoneNo', function() {
		$('label.error, #phoneNumber-error, #businessEmail-error').remove();
	});
	$(document).on('change', '.c-country', function() {
		$('#country-error').remove();
	});
	$('.newcontactlistouter').hide();
	$(document).on('click', '.removecomparingitem', function() {
		$(this).closest('li').remove();
		if ($('.contact-info-list li').length) {
			$('.blankdiv-contact-panel').hide();
			$('.add-contact-list, .newcontactlistouter').show();
		} else {
			$('.blankdiv-contact-panel').show();
			$('.add-contact-list, .newcontactlistouter').hide();
			$('.proceed-to-contact-btn').attr('disabled', true);
		}
	});
	$(document).on('click', '.deleteaddressProfile', function() {
		$(this).closest('.adrs-box-outr').hide();
		$(this).closest('.profile-address').hide();
		$(this).closest('.addres-box-outr').hide();
		$(this).closest('.addres-box-outr.user-contacts').find('.add-contact-panel').show();
		$(this).closest('.address-billto').find('.add-contact-panel').show();
		$(this).closest('.address-boxs').find('.primary-adrs-panel').show();
		var addressBlock = $(this).closest('.address-outer').length ? $(this).closest('.address-outer') : $(this).closest('.user-contacts-outer');
		if (addressBlock.length) {
			var addressLength = addressBlock.find('.add-contact-panel:visible').length;
			if (addressLength == 2) {
				addressBlock.find('.copy-adrs-link').hide();
			} else {
				$(this).closest('.address-billto').find('.copy-adrs-link').show();
				$(this).closest('.user-contacts').find('.copy-adrs-link').show();
			}
		}
		if ($(this).closest('.internal-card').length) {
			$(this).closest('.internal-card').find('.adrs-panel-outr').hide();
			$(this).closest('.search-contact-form').find('.search-panel input[type="text"]').val('');
			$(this).closest('.search-contact-form').find('.no-contacts-panel').show();
			$('.add-billing-contact').attr('disabled', true);
		}
		if ($('.selected-billing-add').is(':visible')) {
			if ($('.selected-shipping-add').not(':visible')) {
				$('.blank-shipping-add').find('.copy-adrs-link').show();
			} else {
				$('.blank-shipping-add').find('.copy-adrs-link').hide();
			}
		} else if ($('.selected-shipping-add').is(':visible')) {
			if ($('.selected-billing-add').not(':visible')) {
				$('.blank-billing-add').find('.copy-adrs-link').show();
			} else {
				$('.blank-billing-add').find('.copy-adrs-link').hide();
			}
		} else if ($('.selected-billing-add').not(':visible')) {
			if ($('.selected-shipping-add').not(':visible')) {
				$('.blank-shipping-add, .blank-billing-add').find('.copy-adrs-link').hide();
			}
		}
	});
	$(document).on('click', '.editRecord', function() {
		indexVal = $(this).parents("li").index();
		$('.search-contact-form').hide();
		$('.create-contact-form').show();
		updateContactname = $(this).closest('li').find('.fullname').text();
		updateContactfirstName = updateContactname.split(' ').slice(0, -1).join(' ');
		updateContactlastName = updateContactname.split(' ').slice(-1).join(' ');
		updateContactCountry = $(this).closest('li').find('.primary-state span').text();
		updateContactCompany = $(this).closest('li').find('.company-name').text();
		updateContactEmail = $(this).closest('li').find('.primary-email').text();
		updateContactPhone = $(this).closest('li').find('.primary-phone-number').text();
		updateContactZip = "222888";
		updateContactUserId = $(this).closest('li').find('.primary-number span').text();
		$('.create-contact-form').find('.c-name').val(updateContactfirstName);
		$('.create-contact-form').find('.c-lastname').val(updateContactlastName);
		$('.create-contact-form').find('.c-country').val("US");
		$('.create-contact-form').find('.c-company').val(updateContactCompany);
		$('.create-contact-form').find('.c-businessEmail').val(updateContactEmail);
		$('.create-contact-form').find('.c-phoneNo').val(updateContactPhone);
		$('.create-contact-form').find('.c-zipCode').val(updateContactZip);
		$('.create-contact-form').find('.c-userId').val(updateContactUserId);
	});
	$('.discount-tipsy, .alert-upload-attachment, .fileAlreadyAdded, .alert-discountZero, .alert-discountExceedValue').hide();
	$(document).on('keyup', '.discount-textbox', function() {
		if ($(this).val() >= 51 && $(this).val() <= 99) {
			$(this).addClass('disc-error');
			$('.discount-tipsy, .alert-upload-attachment').fadeIn(300);
			$('.discount-tipsy, .alert-discountZero, .alert-discountExceedValue').fadeOut(300);
			$('.upload-attachment').removeAttr("disabled", "disabled");
		} else if ($(this).val() < 0) {
			$(this).addClass('disc-error');
			$('.discount-tipsy, .alert-discountZero').fadeIn(300);
			$('.discount-tipsy, .alert-upload-attachment, .alert-discountExceedValue').fadeOut(300);
		} else if ($(this).val() > 100) {
			$(this).addClass('disc-error');
			$('.discount-tipsy, .alert-discountExceedValue').fadeIn(300);
			$('.discount-tipsy, .alert-upload-attachment, .alert-discountZero').fadeOut(300);
		} else {
			$(this).removeClass('disc-error');
			$('.discount-tipsy, .alert-upload-attachment, .alert-discountZero, .alert-discountExceedValue').fadeOut(300);
			$('.upload-attachment').attr("disabled", "disabled");
		}
	});
	$('.attachment-info-con').hide();
	$(".add-contact-panel input[type=file]").fadeOut();
	$(document).on("click", "a.upload-icon-link", function() {
		$(this).next("input[type=file]").trigger('click');
	});
	var certifCount;
	$('.extensionErrorMsg, div.loader').hide();
	$("#uploadBtn").on('change', function() {
		var date = $.datepicker.formatDate('d MM yy', new Date());
		var fullPath = $(this).val();
		varfileSize = this.files[0].size / 1024;
		varfileSize = varfileSize / 1024;
		varfileSize = (Math.round(varfileSize * 100) / 100);
		console.log(fullPath);
		var ext = $(this).val().split('.').pop().toLowerCase();
		if ($(this).hasClass('certUpload')) {
			if ($.inArray(ext, ['pdf', 'jpg', 'tiff']) == -1) {
				$('.extensionErrorMsg').show();
				return;
			} else {
				$('.extensionErrorMsg').hide();
			}
		}
		console.log(fullPath, ext);
		if (fullPath) {
			var startIndex = (fullPath.indexOf('\\') >= 0 ? fullPath.lastIndexOf('\\') : fullPath.lastIndexOf('/'));
			var filename = fullPath.substring(startIndex);
			if (filename.indexOf('\\') === 0 || filename.indexOf('/') === 0) {
				filename = filename.substring(1);
				$('.upload-error').hide();
				$('div.loader').show();
				$('.attachment-info-con').show();
				$('.upload-success').show();
				$('.sendApproval').attr('disabled', false);
				if ($(this).hasClass('certUpload')) {
					if ($('.attachment-info-con div').length >= 3) {
						$('.upload-attachment input').attr('disabled', true);
					}
					setTimeout(function() {
						certifCount = $('.attachment-info-con div.attachment-info').length;
						if ($('.attachment-info-con div').length > 0) {
							$('.choose-icon').hide();
						}
					}, 200);
				}
			}
			if ($(this).hasClass('view-uploaded-doc')) {
				setTimeout(function() {
					$('div.loader').hide();
					$(".attachment-info-con").append('<div class="attachment-info clearfix"><div class="file-name"><span id="filename"><a href="./pdf/sample.pdf" target="_blank">' + filename + '</a></span> <span class="file-size">(' + varfileSize + ' MB)</span><span class="uploaded-date">Uploaded On  ' + date + '</span></div><span class="text-right deleteAttach"> <a href="javascript:void(0);"><i class="icon-delete"></i> <span>Delete Attachment</span></a></span></div>');
				}, 1000);
			} else {
				setTimeout(function() {
					$('div.loader').hide();
					$(".attachment-info-con").append('<div class="attachment-info clearfix"><div class="file-name"><span id="filename">' + filename + '</span> <span class="file-size">(' + varfileSize + ' MB)</span><span class="uploaded-date">Uploaded On  ' + date + '</span></div><span class="text-right deleteAttach"> <a href="javascript:void(0);"><i class="icon-delete"></i> <span>Delete Attachment</span></a></span></div>');
				}, 1000);
			}
		}
	});
	
	function fileLength(d) {
		//alert('hi');
		console.log(d);
		if (d == "1") {
			$('.attachment-info.first').show();
			$('.attachment-info.second, .attachment-info.third').hide();
		} else if (d == "2") {
			$('.attachment-info.first, .attachment-info.second').show();
			$('.attachment-info.third').hide();
		} else if (d == "3") {
			$('.attachment-info.first, .attachment-info.second, .attachment-info.third').show();
		} else {
			$('.attachment-info.first, .attachment-info.second, .attachment-info.third').hide();
		}
	};
	$(document).on('click', '.certificateName .attachment-info .deleteAttach a', function() {
		$(this).closest('.attachment-info').hide();
		certifCount = certifCount - 1;
		if ($('.attachment-info-con div').length) {
			$('.sendApproval').attr('disabled', false);
			$('.upload-attachment').val('View/Upload Approval Attachment');
		} else {
			$('.sendApproval').attr('disabled', true);
			$('.upload-attachment').val('Upload Approval Attachment');
		};
		//console.log(certifCount);
		if (certifCount == 0) {
			$('.choose-icon').show();
		};
		if (certifCount < 3) {
			$('.upload-attachment input').attr('disabled', false);
		};
		if ($(this).hasClass('certif')) {
			if (certifCount == "1") {
				$('.tax-attachment-box .attachment-info').slice(-1).remove()
			} else if (certifCount == "2") {
				$('.tax-attachment-box .attachment-info').slice(-1).remove()
			} else if (certifCount == "0") {
				$('.tax-attachment-box .attachment-info').slice(-3).remove()
			}
		}
		fileLength(certifCount);
	});
	$(document).on('click', '.attachment-info .deleteAttach a', function() {
		if ($(this).hasClass('certif')) {
			return;
		}
		$(this).closest('.attachment-info').remove();
		certifCount = certifCount - 1;
		if ($('.attachment-info-con div').length) {
			$('.sendApproval').attr('disabled', false);
			$('.upload-attachment').val('View/Upload Approval Attachment');
		} else {
			$('.sendApproval').attr('disabled', true);
			$('.upload-attachment').val('Upload Approval Attachment');
		};
		// console.log(certifCount);
		if (certifCount == 0) {
			$('.choose-icon').show();
		};
		if (certifCount < 3) {
			$('.upload-attachment input').attr('disabled', false);
		};
		if ($(this).hasClass('certif')) {
			if (certifCount == "1") {
				$('.tax-attachment-box .attachment-info').slice(-1).remove()
			} else if (certifCount == "2") {
				$('.tax-attachment-box .attachment-info').slice(-1).remove()
			} else if (certifCount == "0") {
				$('.tax-attachment-box .attachment-info').slice(-3).remove()
			}
		}
		fileLength(certifCount);
	});
	$(document).on('click', '.sendApproval', function() {
		$(this).attr('disabled', true);
		$('.discount-tipsy').hide();
		$('.discount-textbox').removeClass('disc-error');
		isAttachmentUploaded = true;
		$('.share-with-customer:not(.attachment-uploaded)').hide();
		$('.share-with-customer.attachment-uploaded').show();
		if ($('.attachment-info-con div').length) {
			$('.upload-attachment').val('View/Upload Approval Attachment');
		} else {
			$('.upload-attachment').val('Upload Approval Attachment');
		}
	});
	$(document).on('click', '.upload-disc-attachment a', function() {
		$('.attachment-info-con').find('.attachment-info').remove();
	});
	$(document).on('click', '.editInfo', function() {
		var editname = $(this).closest('.adrs-bio-row').find('.user-name').text();
		var editfirstName = editname.split(' ').slice(0, -1).join(' ');
		var editlastName = editname.split(' ').slice(-1).join(' ');
		var editCountry = $(this).closest('.adrs-bio-row').find('.email').text();
		var editCompany = $(this).closest('.adrs-bio-row').find('.org-name').text();
		var editEmail = $(this).closest('.adrs-bio-row').find('.contact').text();
		var editPhone = $(this).closest('.adrs-bio-row').find('.country').text();
		var editZip = "222888";
		var editUserId = $(this).closest('.adrs-bio-row ').find('.user-id span').text();
		$('.search-contact-form').hide();
		$('.create-contact-form').show();
		$('.create-contact-form').find('.divTitle').text('Edit Contact');
		$('.create-contact-form').find('.c-name').val(editfirstName);
		$('.create-contact-form').find('.c-lastname').val(editlastName);
		$('.create-contact-form').find('.c-country').val("US");
		$('.create-contact-form').find('.c-company').val(editCompany);
		$('.create-contact-form').find('.c-businessEmail').val(editEmail);
		$('.create-contact-form').find('.c-phoneNo').val(editPhone);
		$('.create-contact-form').find('.c-zipCode').val(editZip);
		$('.create-contact-form').find('.c-userId').val(editUserId);
	});
	$(document).on('click', '.deleteProfile', function() {
		$(this).closest('.contact-outr-box').find('.adrs-panel-outr, .contact-type-row, .contact-type-row').hide();
		$('.add-contact-panel.no-contacts-panel').show();
		$('.search-contact-form').find('.business-contacts').val("");
	});
	$('.address-popover').hide();
	$(document).on('change', '.primaryReplace input', function() {
		//setTimeout(function(){
		var getId = $(this).attr('id');
		var roleName = $(this).next('label').text();
		$('.role-name').text(roleName);
		$(this).closest('.primaryReplace').find('.overRightNo').attr('data-value', getId);
		if ($(this).closest('div.col-sm-6').index() == 1) {
			$(this).closest('.primaryReplace').find('.address-popover').addClass('arrow-position');
		}
		$(this).closest('.modal-content').find('.modal-footer .add-new-contct').removeAttr('data-dismiss', 'modal')
		if ($(this).is(':checked')) {
			$(this).closest('.primaryReplace').find('.address-popover').show();
			$(this).closest('.assign-panel').find('input:checkbox').attr('disabled', true);
		} else {
			$(this).closest('.primaryReplace').find('.address-popover').hide().removeClass('arrow-position');
			$(this).closest('.modal-content').find('.modal-footer .add-new-contct').attr('data-dismiss', 'modal')
		}
	});
	$(document).on('change', '.contact-list-item input', function() {
		//setTimeout(function(){
		if ($(this).val() == ('Primary Business')) {
			if ($(this).is(':checked')) {
				$('input[value="Additional"]').attr('disabled', true);
				$(this).closest('.contact-type').find('.address-popover').show();
			} else {
				if ($('input[value="Primary Billing"]').is(':checked')) {
					$('input[value="Additional"]').attr('disabled', true);
				} else {
					$('input[value="Additional"]').attr('disabled', false);
				}
			}
		} else if ($(this).val() == ('Primary Billing')) {
			if ($(this).is(':checked')) {
				$('input[value="Additional"]').attr('disabled', true);
			} else {
				if ($('input[value="Primary Business"]').is(':checked')) {
					$('input[value="Additional"]').attr('disabled', true);
				} else {
					$('input[value="Additional"]').attr('disabled', false);
				}
			}
		} else {
			$('input[value="Additional"]').attr('disabled', false);
			$(this).closest('li').find('.address-popover').hide();
		}
		//},100);
	});
	$(document).on('click', '.overRightYes', function() {
		$(this).closest('.address-popover').hide();
		$(this).closest('.address-popover').removeClass('arrow-position');
		$(this).closest('.modal-content').find('.overwrite-error').hide();
		$(this).closest('.modal-content').find('.modal-footer .add-new-contct').attr('data-dismiss', 'modal');
		$(this).closest('.assign-panel').find('input:checkbox').attr('disabled', false);
		$('#modifyContacts').find('.addMultipleAddress').attr('disabled', false);
		$(this).closest('.modal-content').find('.add-billing-contact').attr('disabled', false);
		$('.overRightNo').removeAttr('data-value');
	});
	$(document).on('click', '.overRightNo', function() {
		var selectedCheck = $(this).attr('data-value');
		$("input#" + selectedCheck).prop('checked', false);
		$(this).closest('.address-popover').hide();
		$(this).closest('.address-popover').removeClass('arrow-position');
		$(this).closest('.modal-content').find('.overwrite-error').hide();
		$(this).closest('.modal-content').find('.modal-footer .add-new-contct').attr('data-dismiss', 'modal');
		$(this).closest('.assign-panel').find('input:checkbox').attr('disabled', false);
		$('this').removeAttr('data-value');
	});
	$(document).on('click', '.address-con > .dot-icon', function() {
		$(this).closest('.address-con').removeClass('show-address');
		$(this).closest('.address-con').find('.address-text').fadeIn();
	});
	$(document).on('click', '.address-text .icon-close', function() {
		$(this).closest('.address-text').fadeOut(function() {
			$(this).closest('.address-con').addClass('show-address');
		});
	});
	$(document).on('click', '.handle-header > .dot-icon', function() {
		$(this).closest('.handle-header').prev('.page-head-row').slideToggle();
	});
	$(document).on('click', 'input[data-target="#upload-approval"]', function() {
		if ($(this).hasClass('share-with-customer')) {
			$("#upload-approval").find('.share-condition').show();
		} else {
			$("#upload-approval").find('.share-condition').hide();
		}
	});
	$("#upload-approval").on('hidden.bs.modal', function(e) {
		if ($('#uploadBtn').val() == '') {
			isAttachmentUploaded = false;
			$('.share-with-customer:not(.attachment-uploaded)').show();
			$('.share-with-customer.attachment-uploaded').hide();
		}
	});
	$(document).on("click", ".proceed-to-contact-btn", function() {
		$('.create-new-contact').show();
		$('.contact-list-item input').attr('disabled', false);
		$('.contact-list-item input').prop('checked', false);
		$('.create-contact-form .form-control').val("");
		$('.business-contacts').val("");
		$('.contact-outr-box .adrs-panel-outr, .create-contact-form').hide();
		$('.no-contacts-panel, .search-contact-form').show();
	});
	/*------------------*/
	var accessV;
	$(document).on("change", ".shared-team", function() {
		accessV = $(this).val();
		if ($('.shared-team').val() != "" && $(this).val() != "") {
			$('.addContact').attr('disabled', false);
		}
	});
	$(document).on("click", "#shareCustomer .addContact", function() {
		$('#shareCustomer').find('.norecords').hide();
		$('#shareCustomer').find('.records').show();
		$('#shareCustomer').find('table .records').append('<tr> <td>Jane Smith</td><td>jsmith@cisco.com</td><td>jsmith</td> <td class="text-center"><a href="javascript:void(0);" class="icon-delete-new tipsyTop" title="Delete"></a></td></tr>');
		$('.shareWithTeam').attr('disabled', false);
		$('.addContact').attr('disabled', true);
		$('.shared-team').val("");
		//$(".accessItem").prop("selectedIndex", 0);
		$('#shareCustomer .records tr:last').find('.selectedOpt').val(accessV);
		$('.tipsyTop').tipsy({
			gravity: 's'
		});
	});
	$(document).on("click", "#shareCustomer .icon-delete-new", function() {
		$(this).closest('tr').remove();
		$('.tipsy').remove();
		if ($('#shareCustomer table .records tr').length) {
			$('.shareWithTeam').attr('disabled', false);
			$('#shareCustomer').find('.norecords').hide();
			$('#shareCustomer').find('.records').show();
			$(".user-removed").slideDown();
			setTimeout(function() {
				$(".user-removed").slideUp();
			}, 5000);
		} else {
			$('.shareWithTeam').attr('disabled', true);
			$('#shareCustomer').find('.norecords').show();
			$('#shareCustomer').find('.records').hide();
			$(".user-removed").slideDown();
			setTimeout(function() {
				$(".user-removed").slideUp();
			}, 5000);
		}
	});
	$(document).on("click", "#shareCustomer .shareWithTeam", function() {
		if ($('#shareCustomer table .records tr').length) {
			$('#shareCustomer').find('.share-detail').hide();
			$('#shareCustomer').find('.sent-detail').show();
		}
	});
	$(document).on("click", "li.print .icon-share", function() {
		$('#shareCustomer table .records tr').remove();
		$('#shareCustomer').find('.share-detail, .norecords').show();
		$('#shareCustomer').find('.sent-detail, .records').hide();
	});
	/*------------------*/
	
	/*-- Quotes Filter starts --*/
	$(document).on("change", ".sortQuotesTiles select", function() {
		var cat = $(this).val();
		console.log(cat);
		if (cat == "all") {
			$('.item-table-wrapper > div.quote-tile-row').show();
			$('.subs-table > tbody > tr').show();
		} else {
			$('.item-table-wrapper > div.quote-tile-row').hide();
			$('.subs-table > tbody > tr').hide();
			$('.item-table-wrapper > div[data-category-type="' + cat + '"]').show();
			$('.subs-table > tbody > tr[data-category-type="' + cat + '"]').show();
		}
		if (cat != "") {
			$('.clearAllFilter').attr('disabled', false);
		}
	});
	/* -- Quotest Filter Ends --*/
	$(window).scroll(function() {
		var h = $('.order-widget').outerWidth();
		if ($(this).scrollTop() > 190) {
			$('.order-widget').outerWidth(h);
			$('.order-widget').addClass('fixed');
		} else {
			$('.order-widget').removeClass('fixed');
		}
	});
	/*-- viewContactDetail */
	$(".viewContactDetail").hide();
	$(document).on("click", ".viewConDetail", function() {
		setTimeout(function() {
			$('.viewConDetail').addClass('active');
		}, 200);
		if ($(this).hasClass('active')) {
			setTimeout(function() {
				$('.viewConDetail').removeClass('active');
			}, 500);
			$(".viewContactDetail").slideUp("slow");
			$(this).text('View Contact Details');
		} else {
			$(".viewContactDetail").slideDown("slow");
			$(this).text('Hide Contact Details');
		}
	});
	/*-- viewContactDetail */
	/*-------------Edit fields-------------*/
	$('.editable-fields, .nonEditable-email').not('.email-fields').hide();
	var updatedtext;
	$("#datepicker, #datepicker2").datepicker({
		minDate: new Date(),
		dateFormat: "M dd,yy",
		onSelect: function(dateText) {
			updatedtext = new Date(dateText);
			var str = $.datepicker.formatDate('M dd,yy', updatedtext);
			$(this).closest('.editOuter').find('.nonEditable .updatedTxt span').text(str);
			$(this).closest('.editOuter').find('.editable-fields').hide();
			$(this).closest('.editOuter').find('.nonEditable').show();
		}
	});
	$("#contactEmail").validate({
		rules: {
			"email": {
				required: true,
				email: true
			}
		},
		submitHandler: function(form) { // for demo
			$('label.error').remove();
		}
	});
	$(document).on("click", ".editFilledField", function() {
		$(this).closest('.editOuter').find('.editable-fields').show();
		$(this).closest('.editOuter').find('.nonEditable').hide();
		if ($(this).hasClass('dateField')) {
			$(this).closest('.editOuter').find('#datepicker, #datepicker2').datepicker("show");
		};
	});
	$(document).on("click", ".del-icon", function() {
		$(this).closest('.editOuter').find('.editable-fields').hide();
		$(this).closest('.editOuter').find('.nonEditable').show();
	});
	var countryIsChanged;
	window.onclick = function(event) {
		if (event == undefined || event.srcElement == undefined || event.srcElement.className == undefined) {
			return;
		};
		if (event.srcElement.className == "icon-edit white tipsyTop editFilledField" || event.srcElement.className == "form-control" || event.srcElement.className == "form-control error" || event.srcElement.className == "icon-edit tipsyTop editFilledField" || event.srcElement.className == "c-country headerCountryChange" || event.srcElement.className == "icon-edit tipsyTop editFilledField dateField" || event.srcElement.className == "form-control valid" || event.srcElement.className == "form-control hasDatepicker" || event.srcElement.className == "icon-edit white tipsyTop editFilledField dateField") {
			return;
		} else {
			if (event.target != document.getElementsByTagName('input')) {
				updatedtext = $('.editable-fields:visible').find('input').val();
				if (updatedtext) {
					$(".editable-fields").each(function() {
						if ($(this).is(':visible')) {
							if ($(this).hasClass('emailBoxValid')) {
								if ($('#contactEmail').valid()) {
									$(this).closest('.editOuter').find('.editable-fields').removeClass('outer-error');
									$(this).closest('.editOuter').find('.editable-fields .form-group').removeClass('error');
									$(this).closest('.editOuter').find('.nonEditable a').text(updatedtext);
									$(this).closest('.editOuter').find('.editable-fields').hide();
									$(this).closest('.editOuter').find('.nonEditable').show();
								} else {
									$(this).closest('.editOuter').find('.editable-fields').addClass('outer-error');
									$(this).closest('.editOuter').find('.editable-fields .form-group:not(.provisning-cntct)').addClass('error');
									return;
								}
							} else {
								$(this).parent('.editOuter').find('.nonEditable .updatedTxt span').text(updatedtext);
								$(this).parent('.editOuter').find('.editable-fields').hide();
								$(this).parent('.editOuter').find('.nonEditable').show();
							}
						}
					});
				}
				countryIsChanged = 0;
				updatedtext = "";
			}
		}
	};
	$(document).on("blur keyup", "#contactEmail input", function() {
		if ($('#contactEmail').valid()) {
			$(this).closest('.editable-fields').removeClass('outer-error');
			$(this).closest('.editable-fields .form-group').removeClass('error');
		} else {
			$(this).closest('.editable-fields').addClass('outer-error');
			$(this).closest('.editable-fields .form-group:not(.provisning-cntct)').addClass('error');
		}
	});
	$(document).on("change", ".headerCountryChange", function() {
		updatedtext = $('.headerCountryChange option:selected').text();
		$(this).closest('.editOuter').find('.nonEditable .updatedTxt span').text(updatedtext);
		$(this).closest('.editOuter').find('.editable-fields').hide();
		$(this).closest('.editOuter').find('.nonEditable').show();
	});
	$(document).on('click', 'select', function() {
		if (!$(this).hasClass('focus')) {
			$(this).addClass('focus');
		} else {
			$(this).removeClass('focus');
		}
	});
	$('body').mouseup(function(e) {
		var container = $('select');
		if (!container.is(e.target) && container.has(e.target).length === 0) {
			$('select.focus').removeClass('focus');
		}
	});
	$(document).on("click", ".editaddressInfo", function() {
		var modalType = 'contact';
		if ($(this).hasClass('business')) {
			modalType = 'business';
		} else if ($(this).hasClass('billing')) {
			modalType = 'billing';
		}
		$('#primaryContact').find('.modal-title').hide();
		$('#primaryContact').find('.modal-title.' + modalType).show();
		if ($(this).hasClass('changeAddress')) {
			var headingText = $(this).closest('.addres-box-outr').find('.adrs-title span').text();
			console.log(headingText);
			if (headingText == "Bill To") {
				$('#billingAddress .modal-title').text("Edit Bill To Address");
			} else {
				$('#billingAddress .modal-title').text("Edit Service To Address");
			}
			$('.checkoutChangeAddress').find('.c-country').val("US");
			$('.checkoutChangeAddress').find('.c-city').val("San Jose");
			$('.checkoutChangeAddress').find('.c-state').val("CA");
			$('.checkoutChangeAddress').find('.c-addOne').val("116 Inverness Dr. East Suite-375");
			$('.checkoutChangeAddress').find('.c-addTwo').val("C/O Castle Pines");
		} else {
			var headingText = $(this).closest('.adrs-bio-row').find('.addressHeading').text();
			if (headingText == "Billing To Address") {
				$('#billingAddress .modal-title').text("Edit Bill To Address");
				$('#billingAddress .new-address').text("Existing Address");
			} else {
				$('#billingAddress .modal-title').text("Edit Service To Address");
				$('#billingAddress .new-address').text("Existing Address");
			}
			$('#billingAddress .quote-initiantion-form').show();
			$('#billingAddress .address-outer, #billingAddress .swith-panel').hide();
			$('#billingAddress .addaddressestopage').val("Save");
		}
	});
	$(document).on("click", ".add-bill-addr > a", function() {
		$('#billingAddress').modal('hide');
		var title = $(this).closest('.modal-content').find('.modal-title').text();
		//console.log(title);
		if (title == "Edit Service To Address" || title == "Edit Bill To Address") {
			$('#primaryContacts .modal-title').text("Add Service Address");
			$('.search-contact-form').hide();
			setTimeout(function() {
				$('.search-contact-form').hide();
				$('.new-adress-form').show();
				$('#primaryContacts').find('.add-bill-addrNew').hide();
			}, 500);
		} else {
			$('#primaryContacts .modal-title').text('Add Billing Address');
		};
	});
	$(document).on("click", ".add-bill-addrNew > a", function() {
		$('#primaryContacts').find('.add-bill-addrNew').show();
		var title = $(this).closest('.modal-content').find('.modal-title').text();
		$('.search-contact-form').hide();
		$('.new-adress-form').show();
		// $(this).find('span').text('Add Existing Address');
		$(this).closest('.add-bill-addrNew').hide();
	});
	$(document).on("click", "#myTab li a", function() {
		setTimeout(function() {
			leftbarH();
		}, 300);
	});
	$(document).on("click", ".add-new-profileAddress", function() {
		$('.business-contacts').val("");
		$('.no-contacts-panel').show();
		$('.contact-type-row').hide();
	});
	$(document).on("click", ".copyAddress", function() {
		$(".tab-pane.fade.in .addNewAddress").find('.blankAddress').remove();
		$(".tab-pane.fade.in .addNewAddress").append('<div class="col-xs-6 col-sm-6 profile-address"><div class="addres-box-outr address-billto"><div class="adrs-title text-uppercase borderB0 marginB0"><span>Bill To</span><ul class="user-ctrl"><li><a href="javascript:void(0);" class="editaddressInfo changeAddress change-bill-to" data-toggle="modal" data-target="#billingAddress">Change</a></li><li><a href="javascript:void(0);" class="deleteaddressProfile">Delete</a></li></ul></div><div class="adrs-body"><span class="user-name">Ruckus Pizza Inc.</span><div class="address-text"><p>116 Inverness Dr. East Suite-375</p><p>C/O Castle Pines</p><p>San Jose. CA</p><p>United States</p></div><div class="text-default">Default</div></div></div></div><div class="col-xs-6 col-sm-6 blankAddress"><div class="addres-box-outr"><div class="add-contact-panel sm"><img src="images/ship-adrs-gray.svg" alt="Earth"><div class="clearfix"></div><a class="add-contact-txt add-bill-addr add-new-profileAddress" href="javascript:void(0);" data-toggle="modal" data-target="#primaryContacts">Add New Address </a></div><div class="addres-box-outr" style="display:none;"><div class="adrs-title text-uppercase">Bill To<ul class="user-ctrl"><li><a href="javascript:void(0);" class="editaddressInfo" data-toggle="modal" data-target="#billingAddress">Change</a></li><li><a href="javascript:void(0);" class="deleteaddressProfile">Delete</a></li></ul></div></div></div></div>');
		leftbarH();
	});
	$('.date-alert, .dateErrorToolTip').hide();
	$(document).on("click", ".placeOrderBtn", function() {
		console.log($('.updatedTxt span').text());
		if ($(".address-outer .add-contact-panel:visible, .user-contacts-outer .add-contact-panel:visible").length) {
			$(".address-outer .add-contact-panel:visible, .user-contacts-outer .add-contact-panel:visible").closest('.addres-box-outr').addClass('error');
			if ($(".editable-fields:visible").length) {
				$('.date-alert, .dateErrorToolTip').show();
			} else {
				$('.date-alert, .dateErrorToolTip').hide();
			};
			if ($(".taxability-info input[name='taxability']").is(':checked')) {
				$('.tax-information-box').removeClass('error');
				$('.tax-alert').hide();
			} else {
				$('.tax-information-box').addClass('error');
				$('.tax-alert').show();
				return;
			};
		} else {
			if ($(".taxability-info input[name='taxability']").is(':checked')) {
				$('.tax-information-box').removeClass('error');
				$('.tax-alert').hide();
			} else {
				$('.tax-information-box').addClass('error');
				$('.tax-alert').show();
				return;
			};
			if ($(".editable-fields:visible").length) {
				$('.date-alert, .dateErrorToolTip').show();
			} else {
				$('.date-alert, .dateErrorToolTip').hide();
				window.location.href = 'order-confirmation.html';
			}
		};
	});
	$(document).on("click", ".taxability-info input", function() {
		$(this).closest('.tax-information-box').removeClass('error');
		$('.tax-alert').hide();
		$('.tax-info-error').fadeOut(300);
	});
	$(document).on("keyup", ".order-input", function() {
		var str = $(this).val();
		var n = str.startsWith("PO-");
		if (n) {
			$(this).closest('.payment-method').find('.po-number').hide();
			$(this).closest('.form-group').removeClass('error-form');
			//$('.purchase-Order-box').removeClass('error');
		} else {
			$(this).closest('.payment-method').find('.po-number').show();
			$(this).closest('.form-group').addClass('error-form');
			//$('.purchase-Order-box').addClass('error');
		}
	});
	$(".contact-radio").change(function() {
		if (this.checked) {
			$('.add-billing-contact.search').prop("disabled", false);
		} else {
			$('.add-billing-contact.search').prop("disabled", true);
		}
	});
	/* Sidebar JS Start */
	$('.usage-data-panel').find('.additional-contact').nextAll('div').hide();
	var showDiv = $('.left-sidebar > ul > li > a.active').attr('data-group');
	$('.usage-data-panel').find('div.' + showDiv).show();
	$(document).on("click", ".left-sidebar > ul > li > a", function() {
		var showDiv = $(this).attr('data-group');
		$(this).closest('ul').find('a').removeClass('active')
		$(this).addClass('active')
		$(this).closest('.sidebar-outer-panel').find('.additional-contact').nextAll('div').hide();
		// $(this).closest('.usage-data-panel').find('> div').hide();
		// console.log($('.usage-data-panel').find('> div').hide());
		$(this).closest('.sidebar-outer-panel').find('div.' + showDiv).show();
	});
	/* Sidebar JS End */
	/* Notifications Expand/Collapse JS Start */
	$(document).on("click", ".set-notifications > h3 > i", function() {
		$(this).toggleClass('closed');
		$(this).closest('.set-notifications').find('ul').slideToggle();
	});
	/* Notifications Expand/Collapse JS End */
	var url = window.location.href;
	var lastPathSegment = url.substr(url.lastIndexOf('/') + 1);
	$('.primaryContactError').hide();
	$(document).on("click", ".contact-info", function() {
		if (lastPathSegment == "review.html") {
			if ($(this).closest('li').hasClass('contact-info')) {
				sessionStorage.setItem("tWcflow", "submitforItemsOnly");
			}
		}
	});
	$(document).on("click", ".product-info", function() {
		if (lastPathSegment == "review.html") {
			if ($(this).closest('li').hasClass('product-info')) {
				sessionStorage.setItem("itemsflow", "submitforItemsOnly");
			}
		}
	});
	$(document).on('click', '.advanceSearch-link a', function() {
		setTimeout(function() {
			$(".c-country").chosen({
				max_selected_options: 5
			});
		}, 500);
	});
	// $(".sidebar-offer").chosen();
	/*-------- Tr expand/collapse in Quote Detail page --------*/
	$(document).on('click', '.minor-sub-head .icon-arrow-down', function() {
		$(this).closest('td').toggleClass('active');
		$(this).closest('tr').nextUntil('.minor-sub-line-head, .major-row').slideToggle();
	});
	/*-------- /Tr expand/collapse in Quote Detail page --------*/
	/* --Modification-- */
	$(document).on("click", ".pro-related-changes", function() {
		if (lastPathSegment == "items-modification.html") {
			sessionStorage.setItem("modificationflow", "contactPreFilled");
		}
	});
	/* --/Modification-- */
	//console.log(sessionStorage.getItem("modificationflow"));
	$('.pss-id, .pss-modify-btn').hide();
	if (sessionStorage.getItem("modificationflow") === null) {
		return;
	} else {
		//console.log(123);
		if (sessionStorage.getItem("modificationflow") == "contactPreFilled") {
			$('.blank-shipping-add, .blank-billing-add, .blankdiv-contact-panel, .selected-billing-add .user-ctrl, .selected-shipping-add .user-ctrl, .non-pss-view').hide();
			$('.selected-billing-add, .selected-shipping-add, .page-level-sub-header.newcontactlistouter, .pss-id, .pss-modify-btn').show();
			$('.proceed-to-contact-btn').attr('disabled', false);
			$("ul.contact-info-list").append('<li><div class="contact-bar"><div class="primary-business"> <i class="contact-icon bussiness"></i> <span>Primary Contract</span> </div><div class="primary-name"><span class="fullname">John Smith</span><span class="company-name">Ruckus Pizza Inc</span></div><ul class="org-info"><li class="country"><i class="icon-user-ccoid"></i> <span>jsmith</span></li><li class="contact"><i class="icon-user-email"></i> <a href="mailto:jsmith@cisco.com">jsmith@cisco.com</a></li><li class="country"><i class="icon-Phone"></i> (402) 737-4932 </li><li class="email"><i class="icon-user-location" style="margin-top: -2px;"></i> <span >United States</span></li></ul><div class="contact-ctrl"><i class="icon-delete-new tipsyTop removecomparingitem" title="Delete"></i></div></div></li><li><div class="contact-bar"><div class="primary-business"> <i class="contact-icon bussiness"></i> <span>Primary Contract</span> </div><div class="primary-name"><span class="fullname">John Smith</span><span class="company-name">Ruckus Pizza Inc</span></div><ul class="org-info"><li class="country"><i class="icon-user-ccoid"></i> <span>jsmith</span></li><li class="contact"><i class="icon-user-email"></i> <a href="mailto:jsmith@cisco.com">jsmith@cisco.com</a></li><li class="country"><i class="icon-Phone"></i> (402) 737-4932 </li><li class="email"><i class="icon-user-location" style="margin-top: -2px;"></i> <span >United States</span></li></ul><div class="contact-ctrl"><i class="icon-delete-new tipsyTop removecomparingitem" title="Delete"></i></div></div></li>');
			$('.modify-btn').show();
			$('.un-modify-btn').hide();
		};
		setTimeout(function() {
			sessionStorage.setItem("modificationflow", "");
		}, 1000);
	};
	if (sessionStorage.getItem("itemsflow") === null) {
		return;
	} else {
		if (sessionStorage.getItem("itemsflow") == "submitforItemsOnly") {
			if ($(".add-product-block").length) {
				$('.alert-upload-attachment').show();
			}
		};
		setTimeout(function() {
			sessionStorage.setItem("itemsflow", "");
		}, 1000);
	};
	if (sessionStorage.getItem("tWcflow") === null) {
		return;
	} else {
		if (sessionStorage.getItem("tWcflow") == "submitforItemsOnly") {
			if ($(".address-boxs").length) {
				$('.primaryContactError').show();
			}
		};
		setTimeout(function() {
			sessionStorage.setItem("tWcflow", "");
		}, 1000);
	};
	/*-------------/Edit fields-------------*/
});


$(document).ready(function() {
	/* -- Mass Billing -- */
	$('.mass-billingCt-outer .adrs-panel-outr, .mass-businessCt-outer .adrs-panel-outr, .mass-suppprtCt-outer .adrs-panel-outr').hide();
	$('.mass-step-widget .review-info, textarea.massDescription').attr('disabled', true);
	$('.mass-step-widget .review-info, .mass-contact').addClass('disabled');
	$('#massPrimaryContacts .add-contact-panel').show();
	$('.mass-adrs-info.mass-billing-id, #massPrimaryContacts .adrs-panel-outr').hide();
	$('.add-mass-id').on('click', function() {
		$('.usesameaddressouter').hide();
	});
	$('.sameAddress').on('click', function() {
		$(this).closest('.col-sm-4').find('.adrs-panel-outr').show();
		$(this).closest('.col-sm-4').find('.add-contact-panel').hide();
	});
	$('.delete-curr-item').on('click', function() {
		if($(this).hasClass('mas-ct-add')){
			$(this).closest('.contactOuterBox').find('.mass-contact-add').hide();
			$(this).closest('.contactOuterBox').find('.mass-contact').show();
			setTimeout(function (){
				if ($('.mass-billingCt-outer .blank-mass-bill-contact-add').is(':visible')) {
					$('.mass-billingCt-outer .mass-business-addr').show();
					$('.mass-billingCt-outer .mass-support-addr').show();
					if ($('.mass-businessCt-outer .blank-mass-business-contact-add').is(':visible')) {
						$('.mass-billingCt-outer .mass-business-addr').hide();
					}
					if ($('.mass-suppprtCt-outer .blank-mass-supp-contact-add').not(':visible')) {
						$('.mass-billingCt-outer .mass-support-addr').hide();
					}
				}
				if ($('.mass-businessCt-outer .blank-mass-business-contact-add').is(':visible')) {
					$('.mass-businessCt-outer .mass-billing-addr').show();
					$('.mass-businessCt-outer .mass-support-addr').show();
					if ($('.mass-billingCt-outer .blank-mass-bill-contact-add').is(':visible')) {
						$('.mass-businessCt-outer .mass-billing-addr').hide();
					}
					if ($('.mass-suppprtCt-outer .blank-mass-supp-contact-add').not(':visible')) {
						$('.mass-businessCt-outer .mass-support-addr').hide();
					}
				}
				if ($('.mass-suppprtCt-outer .blank-mass-supp-contact-add').not(':visible')) {
					$('.mass-suppprtCt-outer .mass-billing-addr').show();
					$('.mass-suppprtCt-outer .mass-business-addr').show();
					if ($('.mass-businessCt-outer .blank-mass-business-contact-add').is(':visible')) {
						$('.mass-suppprtCt-outer .mass-business-addr').hide();
					}
					if ($('.mass-billingCt-outer .blank-mass-bill-contact-add').is(':visible')) {
						$('.mass-suppprtCt-outer .mass-billing-addr').hide();
					}
				}
				$('textarea.massDescription, .mass-proceed-review').attr('disabled', true);
				$('.mass-step-widget .review-info').addClass('disabled');
				
				
				if (!$('.mass-billingCt-outer .mass-contact-add').is(':visible') && !$('.mass-businessCt-outer .mass-contact-add').is(':visible')) {
					if (!$('.mass-suppprtCt-outer .mass-contact-add').is(':visible')) {
						$('.same-contact').hide();
					}
				}
				
			},500);
		}else{
			$(this).closest('.mass-billing-id').hide();
			$(this).closest('.mass-contact-panel').find('.blank-massBill-id').show();
			$('.add-product-form').show();
			$('.add-product-form').find('input').val('');
			$('.mass-contact, .contactAddOuterDiv .mass-contact-add, .mass-step-widget .review-info').addClass('disabled');
			$('textarea.massDescription, .mass-proceed-review').attr('disabled', true);
		}
	});
	$('.mass-contact').on('click', function(e) {
		//console.log(e);
		var n = $(this).closest('.mass-contact-add').find('.adrs-header').text();
		var modal = $('#massPrimaryContacts');
		modal.find('.modal-title').text('Add ' + n);
		modal.find('.chooseExistC a').trigger('click');
		modal.find('input[type="text"]').val("");
		modal.find('.addNewC a').text("Add new contact");
		modal.find('.add-mass-contact').val("Add contact");
		$('#massPrimaryContacts .add-mass-contact').attr('disabled', true);
		$('#massPrimaryContacts input[type="radio"]').prop('checked', false);
		if ($(e.target).hasClass('sameAddress')) {
			return;
		}
		$('#massPrimaryContacts h3').show();
		$('#massPrimaryContacts').modal('show');
		$('#massPrimaryContacts .contact-list-item input[type=checkbox]').prop('checked', false);
		$('#massPrimaryContacts .contact-list-item input[type=checkbox]').prop('disabled', false);
		$('#massPrimaryContacts .adrs-panel-outr').hide();
		$('#massPrimaryContacts .add-contact-panel').show();
		if ($(this).hasClass('blank-mass-bill-contact-add')) {
			$('#massPrimaryContacts .modal-header h3').text('Add Billing Contact');
			$('#massPrimaryContacts #BillingContact').prop('checked', true);
			$('#massPrimaryContacts #BillingContact').prop('disabled', true);
		} else if ($(this).hasClass('blank-mass-business-contact-add')) {
			$('#massPrimaryContacts .modal-header h3').text('Add Business Contact');
			$('#massPrimaryContacts #BusinessContact').prop('checked', true);
			$('#massPrimaryContacts #BusinessContact').prop('disabled', true);
		} else if ($(this).hasClass('blank-mass-supp-contact-add')) {
			$('#massPrimaryContacts .modal-header h3').text('Add Support Contact');
			$('#massPrimaryContacts #supportContact').prop('checked', true);
			$('#massPrimaryContacts #supportContact').prop('disabled', true);
		}
		setTimeout(function() {
			$('#massPrimaryContacts h3').show();
		}, 100)
	});
	
	$('.add-mass-contactId').on('click', function() {
		$('.mass-loader').show();
		setTimeout(function() {
			$('.mass-loader').hide();
		}, 1500);
		console.log($('.quoteDescription').val());
		if ($('.quoteDescription, ').val() != "") {
			$('.mass-proceed-review').prop('disabled', false);
		} else {
			$('.mass-proceed-review').prop('disabled', true);
		}
		$('.mass-adrs-info.mass-billing-id').show();
		$('.blank-billing-add').hide();
		$('.mass-contact, .contactAddOuterDiv .mass-contact-add').removeClass('disabled');
		if ($('.mass-billingCt-outer .mass-contact-add').is(':visible') && $('.mass-businessCt-outer .mass-contact-add').is(':visible') && $('.mass-suppprtCt-outer .mass-contact-add').is(':visible')) {
			$('textarea.massDescription').attr('disabled', false);
			$('.mass-step-widget .review-info, .mass-contact').removeClass('disabled');
		} else {
			$('textarea.massDescription').attr('disabled', true);
			$('.mass-step-widget .review-info').addClass('disabled');
		}
	});
	
	$(document).on('keyup blur', '.quoteDescription, .change-reason .massDescription', function() {
		if ($(this).val() != "" && $('.mass-billing-id').is(':visible')) {
			$('.mass-proceed-review').prop('disabled', false);
			$('.mass-step-widget .review-info').removeClass('disabled');
		} else {
			$('.mass-proceed-review').prop('disabled', true);
			$('.mass-step-widget .review-info').addClass('disabled');
		}
	});
	
	$('.mass-businessCt-outer .mass-billing-addr, .mass-businessCt-outer .mass-business-addr, .mass-businessCt-outer .mass-support-addr, .mass-billingCt-outer .mass-billing-addr,.mass-billingCt-outer .mass-business-addr,  .mass-billingCt-outer .mass-support-addr, .mass-suppprtCt-outer .mass-billing-addr,   .mass-suppprtCt-outer .mass-business-addr, .mass-suppprtCt-outer .mass-support-addr,.same-contact').hide();
	
	$('.add-mass-contact').on('click', function() {
		$('.mass-loader,.same-contact').show();
		setTimeout(function() {
			$('.mass-loader').hide();
		}, 1500);
		if ($('#massPrimaryContacts #BillingContact').is(':checked')) {
			$('.mass-billingCt-outer .mass-contact-add').show();
			$('.mass-billingCt-outer .blank-mass-bill-contact-add').hide();
			if ($('#massPrimaryContacts #BusinessContact').not(':checked')) {
				$('.mass-businessCt-outer .mass-billing-addr').show();
			}
			if ($('#massPrimaryContacts #supportContact').not(':checked')) {
				$('.mass-suppprtCt-outer .mass-billing-addr').show();
			}
		}
		if ($('#massPrimaryContacts #BusinessContact').is(':checked')) {
			$('.mass-businessCt-outer .mass-contact-add').show();
			$('.mass-businessCt-outer .blank-mass-business-contact-add').hide();
			if ($('#massPrimaryContacts #BillingContact').not(':checked')) {
				$('.mass-billingCt-outer .mass-business-addr').show();
			}
			if ($('#massPrimaryContacts #supportContact').not(':checked')) {
				$('.mass-suppprtCt-outer .mass-business-addr').show();
			}
		}
		if ($('#massPrimaryContacts #supportContact').is(':checked')) {
			$('.mass-suppprtCt-outer .mass-contact-add').show();
			$('.mass-suppprtCt-outer .blank-mass-supp-contact-add').hide();
			if ($('#massPrimaryContacts #BillingContact').not(':checked')) {
				$('.mass-billingCt-outer .mass-support-addr').show();
			}
			if ($('#massPrimaryContacts #BusinessContact').not(':checked')) {
				$('.mass-businessCt-outer .mass-support-addr').show();
			}
		}
		//console.log($('#massPrimaryContacts input[type="checkbox"]:checked').length);
		if ($('#massPrimaryContacts input[yupe="checkbox"]').is(':checked').length >= 3) {
			$('textarea.massDescription').attr('disabled', false);
			//$('.mass-step-widget .review-info').removeClass('disabled');
		}
		if ($('.mass-billingCt-outer .mass-contact-add').is(':visible') && $('.mass-businessCt-outer .mass-contact-add').is(':visible')) {
			$('textarea.massDescription').attr('disabled', false);
		}
		$('#massPrimaryContacts .search-contact-form, #massPrimaryContacts .add-bill-addrNew').show();
		$('#massPrimaryContacts .new-adress-form').hide();
		var modal = $('#massPrimaryContacts');
		$('#massPrimaryContacts .modal-title').text('Add Billing Contact');
		$('#massPrimaryContacts .add-bill-addrNew').show();
		modal.find('input[type="text"]').val("");
		modal.find('.addNewC a').text("Add new contact");
		modal.find('.add-mass-contact').val("Add contact");
	});
	$('.editmassaddressInfo').on('click', function() {
		$('#primaryContacts').modal('show');
		$('#primaryContacts .choose-existbill-Id').hide();
		$('#primaryContacts .addNew-bill-Id').show();
		var modal = $('#primaryContacts');
		$('#primaryContacts .modal-title').text('Edit Billing ID');
		$('#primaryContacts .add-bill-addrNew').hide();
		modal.find('.e-name').val("Ruckus Pizza Inc");
		modal.find('.c-city').val("San Jose CA");
		modal.find('#AddressLineone').val("116 inverness drive east suite 375");
		modal.find('.add-mass-contactId').val('Done');
		setTimeout(function() {
			//$('#primaryContacts').modal('show');
			$('#primaryContacts .search-contact-form').show();
			$('#primaryContacts .new-adress-form').hide();
			var modal = $('#primaryContacts');
			$('#primaryContacts .modal-title').text('Add Billing ID');
			$('#primaryContacts .add-bill-addrNew').show();
			modal.find('input[type="text"]').val("");
			modal.find('.add-mass-contactId').val('Add Billing ID');
		}, 20000);
	});
	$('.editmasscontactaddressInfo').on('click', function() {
		var n = $(this).closest('.mass-contact-add').find('.adrs-header').text();
		console.log(n);
		$('#massPrimaryContacts').modal('show');
		$('#massPrimaryContacts .modal-title').text('Edit ' + n);
		$('#massPrimaryContacts .addNewC a').trigger('click');
		$('#massPrimaryContacts .new-adress-form').show();
		var modal = $('#massPrimaryContacts');
		modal.find('.c-name').val("Ruckus Pizza Inc");
		modal.find('.c-city').val("San Jose CA");
		modal.find('#AddressLineone').val("116 inverness drive east suite 375");
		modal.find('.addNewC a').text("Edit contact");
		modal.find('.add-mass-contact').val("Edit contact");
	});
	$(document).on('click', '#primaryContacts .radio input, #massPrimaryContacts .radio input', function() {
		$('.add-mass-contactId,.add-mass-contact').attr('disabled', false);
	});
	$(document).on('click', '.blank-massBill-id', function() {
		$('#primaryContacts .add-mass-contactId').attr('disabled', true);
		$('#primaryContacts input[type="radio"]').prop('checked', false);
		$('#primaryContacts .choose-existbill-Id').show();
		$('#primaryContacts .addNew-bill-Id').hide();
	});
	$(document).on('keyup blur', '#primaryContacts #chooseExisting, #massPrimaryContacts #chooseExisting', function() {
		if ($(this).val() != "" || $('.norecords').is(':visible')) {
			$('.add-mass-contactId,.add-mass-contact').attr('disabled', true);
			$('#primaryContacts input[type="radio"], #massPrimaryContacts input[type="radio"]').prop('checked', false);
		}
	});
	$(document).on('keyup blur', '#primaryContacts input, #massPrimaryContacts input', function() {
		$(this).closest('.modal-content').find('.add-mass-contactId, .add-mass-contact').attr('disabled', false);
	});
	$(document).on('click', '.sameAddress', function() {
		console.log(1230);
		if ($('.mass-billingCt-outer .blank-mass-bill-contact-add').is(':visible')) {
			$('.mass-billingCt-outer .mass-business-addr').show();
			$('.mass-billingCt-outer .mass-support-addr').show();
			if ($('.mass-businessCt-outer .blank-mass-business-contact-add').is(':visible')) {
				$('.mass-billingCt-outer .mass-business-addr').hide();
			}
			if ($('.mass-suppprtCt-outer .blank-mass-supp-contact-add').not(':visible')) {
				$('.mass-billingCt-outer .mass-support-addr').hide();
			}
		}
		if ($('.mass-businessCt-outer .blank-mass-business-contact-add').is(':visible')) {
			$('.mass-businessCt-outer .mass-billing-addr').show();
			$('.mass-businessCt-outer .mass-support-addr').show();
			if ($('.mass-billingCt-outer .blank-mass-bill-contact-add').is(':visible')) {
				$('.mass-businessCt-outer .mass-billing-addr').hide();
			}
			if ($('.mass-suppprtCt-outer .blank-mass-supp-contact-add').not(':visible')) {
				$('.mass-businessCt-outer .mass-support-addr').hide();
			}
		}
		if ($('.mass-suppprtCt-outer .blank-mass-supp-contact-add').not(':visible')) {
			$('.mass-suppprtCt-outer .mass-billing-addr').show();
			$('.mass-suppprtCt-outer .mass-business-addr').show();
			if ($('.mass-businessCt-outer .blank-mass-business-contact-add').is(':visible')) {
				$('.mass-suppprtCt-outer .mass-business-addr').hide();
			}
			if ($('.mass-billingCt-outer .blank-mass-bill-contact-add').is(':visible')) {
				$('.mass-suppprtCt-outer .mass-billing-addr').hide();
			}
		}
		if ($('.mass-billingCt-outer .mass-contact-add').is(':visible') && $('.mass-businessCt-outer .mass-contact-add').is(':visible')) {
			if ($('.mass-suppprtCt-outer .mass-contact-add').is(':visible')) {
				$('textarea.massDescription').attr('disabled', false);
				$('.mass-step-widget .review-info, .mass-contact').removeClass('disabled');
			}
		}
	});
	$('.custom-tooltipbox').hide();
	$('.offerName-text').hover(function() {
		var r = $('.offerName-text').outerWidth() - 100;
		//$(this).closest('td').find('.custom-tooltipbox').fadeIn();
		//$(this).closest('td').find('.custom-tooltipbox').css('right', r);
		//$(this).closest('td').find('.custom-tooltipbox').css('top', r);
		//$(this).closest('td').find('.custom-tooltipbox').css('top', -100);
	});
	/* -- Mass Billing -- */
	/*==== Check Holds Show/Hide JS ====*/
	$('.check-holds').click(function() {
		if (!$(this).closest('.modify-progress').find('.hold-detail-toggle').hasClass('active')) {
			$(this).closest('.modify-progress').find('.hold-detail').slideDown();
			$(this).closest('.modify-progress').find('.hold-detail-toggle').addClass('active');
		}
	});
	$('.hold-status').click(function() {
		if (!$(this).hasClass('active')) {
			$(this).closest('.hold-status').next('.hold-detail').slideDown();
			$('.hold-status a span').text("Show Less");
			$(this).addClass('active');
		} else {
			$(this).closest('.hold-status').next('.hold-detail').slideUp();
			$(this).removeClass('active');
			$('.hold-status a span').text("Show More");
		}
	});
	$('.clearAllFilter').click(function() {
		$(this).closest('.invoicefilters').find('select').val($(this).closest('.invoicefilters').find('select option:last').val());
		console.log($(this).closest('.invoicefilters'));
		$(this).closest('.invoicefilters').find('select').val($(this).closest('.invoicefilters').find('select option:first').val());
		$(this).closest('.invoicefilters').find('input:not(.clearAllFilter)').val('');
		$(this).attr('disabled', true);
		$('.table-responsive').find('tr').show();
		//$('.table-responsive').find('tr').attr('data-category-type', 'all');
	});
	/*==== Dispute Modal JS Start ====*/
	$('.invoice-dropdown .action-links > ul > li > a').click(function(){
		var invoiceNum = $(this).text();
		$(this).closest('.invoice-dropdown').find('#inovoice-number-dropdown .selected-invoice-num').text(invoiceNum);
		if(invoiceNum != "Select Invoice"){
			$(this).closest('.modal-inner').find('.select-invoice').show();
			setTimeout(function(){
				$("#disputeDetailModal .modal-body").niceScroll();
			}, 100);
		}else{
			$(this).closest('.modal-inner').find('.select-invoice').hide();
		}
	});
	$('.invoice-dropdown .action-links > ul > li > a').closest('.modal-inner').find('.select-invoice').show();
	/*==== Dispute Modal JS End ====*/
	/*==== Invoice Tabs JS Start ====*/
	$(document).on("click", "#myTab > li > a", function() {
		var ariaControl = $(this).attr('aria-controls');
		if(ariaControl == 'disputePanel'){
			$('.quoteCountrySelect').find('option.show-invoice').hide();
			$('.quoteCountrySelect').find('option.show-dispute').show();
			$('.sidebar').find('.show-invoice').hide();
			$('.customer-invoice .quote-search').find('.form-control-placeholder').text('Search Disputes');
		}
		else{
			$('.quoteCountrySelect').find('option.show-invoice').show();
			$('.quoteCountrySelect').find('option.show-dispute').hide();
			$('.sidebar').find('.show-invoice').show();
			$('.customer-invoice .quote-search').find('.form-control-placeholder').text('Search Invoices');
		}
	});
	
	$('.pss-invoice option.show-dispute').hide();
	
	setTimeout(function(){
		$('.custom-select-box-outr').find('.mcdropdown input').val('Invoice');
	},500);
	
	$(document).on('click', '.mcdropdown_menu li', function() {
		var activeTxt = $(this).attr('rel');
		$('.total-results-box').show();
		if(activeTxt == '1'){
			$('.sidebar').find('.show-invoice').show();
			$('.quoteCountrySelect option.show-invoice').show();
			$('.quoteCountrySelect option.show-dispute').hide();
			$('#disputePanel').hide();
			$('#invoicePanel').show();
			$('.customer-invoice .quote-search').find('.form-control-placeholder').text('Search Invoices');
		}else if(activeTxt == '2'){
			$('.quoteCountrySelect option.show-invoice').hide();
			$('.quoteCountrySelect option.show-dispute').show();
			$('.sidebar').find('.show-invoice').hide();
			$('#invoicePanel').hide();
			$('#disputePanel').show();
			$('.customer-invoice .quote-search').find('.form-control-placeholder').text('Search Disputes');
		}
	}); 
	/*==== Invoice Tabs JS StaEndrt ====*/
	
	/*==== Credit Card JS Start ====*/
	$('.alertError, .cardExipredError').hide();	 
	
	var existingCard;
	$(document).on("click", ".cc-card-panel .edit-card", function() {
		$("#newcCreditCardForm label.error").remove();
		$('.alertError, .cardExipredError, .errorExpiredCard').hide();
		var modal = $('#addNewCreditCard');
		modal.find('input, select').removeClass('error');
		modal.find('.modal-title').text('Change Card');
		modal.find('.delete-open-card').show();
		modal.find('.save-card-details').show();
		modal.find('.add-new-card-details').hide();
		existingCard = $(this).closest('.cc-card-ui');
		modal.find('.add-new-card-details').addClass('active');
		var firstname = $(this).closest('.cc-card-panel').find('.adrs-body .user-f-name').text();
		var lastname = $(this).closest('.cc-card-panel').find('.adrs-body .user-l-name').text();
		var cardnum = $(this).closest('.cc-card-panel').find('.adrs-body .cc-last-digits').text();
		var expirydate = $(this).closest('.cc-card-panel').find('.adrs-body .cc-expiry-date').text();
		var expiryyear =  $(this).closest('.cc-card-panel').find('.adrs-body .cc-expiry-year').text();
		modal.find('#ccFirstName').val(firstname);
		modal.find('#ccLastName').val(lastname);
		modal.find('#ccNickName').val(firstname);
		modal.find('#ccEmailAddress').val("psorge@cisco.com");
		modal.find('#ccContactNumber').val("(402) 737-4932");
		modal.find('#ccNumber').val("401288888888"+cardnum).attr('disabled', true);
		modal.find('.expire-date').val(expirydate);
		modal.find('.expire-year').val(expiryyear);
		modal.find('.ccv-type-number').val("456");
		modal.find('.c-country').val("US");
		modal.find('#billStateProvince').val("California");
		modal.find('#billCity').val("San Jose");
		modal.find('#billZipCode').val("90210");
		modal.find('#billAdrs1').val("116 Inverness Dr");
		
		if(expirydate < 6 && expiryyear <= 2018){
			$('.errorExpiredCard, .cardExipredError').show();
			$('.alertError').hide();
			$('.expire-date, .expire-year').addClass('error');
		}else{
			$('.errorExpiredCard, .alertError, .cardExipredError').hide();
			$('.expire-date, .expire-year').removeClass('error');
		}
	});
	
	$(document).on("keydown", "input[type='number']", function(e) {
		-1!==$.inArray(e.keyCode,[46,8,9,27,13,110,190])||(/65|67|86|88/.test(e.keyCode)&&(e.ctrlKey===true||e.metaKey===true))&&(!0===e.ctrlKey||!0===e.metaKey)||35<=e.keyCode&&40>=e.keyCode||(e.shiftKey||48>e.keyCode||57<e.keyCode)&&(96>e.keyCode||105<e.keyCode)&&e.preventDefault()
	});
	
	var currentActiveTab = "Credit Card";
	var currentDefaultMethod = "Credit Card";
	
	$(document).on("click", "li.nav-item a", function() {
		currentActiveTab = $(this).attr('payment-type');
		//console.log(currentActiveTab, currentDefaultMethod);
		if(currentActiveTab == currentDefaultMethod){
			$('.payment-default-set .switch-info label').text('Default');
			$('.payment-default-set button').addClass('active');
			$('.payment-method-type').find('strong').text(currentActiveTab);
		}else{
			$('.payment-default-set button').removeClass('active');
			$('.payment-default-set .switch-info label').text('Set as Default');
		}
	});
	
	$(document).on("click", ".payment-default-set .assign-sameadd", function() {
		if($(this).hasClass('active')){
			//console.log(currentActiveTab);
			var activeAtt= $(this).closest('#paymentMethods').find('li.active a').attr('payment-type');
			console.log(activeAtt);
			currentActiveTab = activeAtt;
			if(currentActiveTab == "Bill me later"){
				$('.payment-method-type').find('strong').text('ACH/Check/Wire Transfer');
			}else if(currentActiveTab == "Credit Card"){
				$('.payment-method-type').find('strong').text('Credit Card');
			}else{
				$('.payment-method-type').find('strong').text('Paypal');
			}
			$('.payment-default-set .switch-info label').text('Default');
			
		}else{
			currentActiveTab = "";
			$('.payment-method-type').find('strong').text('--');
			$('.payment-default-set .switch-info label').text('Set as Default');
		}
		
		currentDefaultMethod = currentActiveTab;
	});
	
	$(document).on("click", ".set-card-status button", function() {
		$(this).closest('.cc-card-panel').siblings().find('.set-card-status button').removeClass('active');
		$(this).closest('#creditCardMethodTab').find('.set-card-status .swith-panel').show().removeClass('hide show');
		$(this).closest('#creditCardMethodTab').find('.set-card-status .default-card').hide().removeClass('show hide');
		$(this).closest('#creditCardMethodTab').find('.addres-box-outr').removeClass('active');
		$(this).addClass('active');
		if($(this).hasClass('active')){
			$(this).closest('.set-card-status').find('.swith-panel').hide();
			$(this).closest('.set-card-status').find('.default-card').show();
			$(this).closest('.addres-box-outr').addClass('active');
		}
	});
	
	$(document).on("click", ".add-new-card-outer-box, .add-new-ccard", function() {
		$('.alertError, .cardExipredError, .errorExpiredCard').hide();
		var modal = $('#addNewCreditCard');
		modal.find('.delete-open-card').hide();
		modal.find('.save-card-details').hide();
		modal.find('.add-new-card-details').show();
		modal.find('.modal-title').text('Add New Card');
		modal.find('input[type="text"], input[type="number"], select').val('').attr('disabled', false).removeClass('error');
		modal.find('input[type="checkbox"]').prop("checked", false)
	});
	
	$(document).on("click", ".save-card-details", function() {
		if(!$("#newcCreditCardForm").valid()){
			return;
		}else{
			$('#addNewCreditCard').modal('hide');
		}
		var modal = $(this).closest('.modal-content');
		var firstname = modal.find('#ccFirstName').val();
		var lastname = modal.find('#ccLastName').val();
		var cardnum = modal.find('#ccNumber').val();
		var lastFourdigit = cardnum.substr(cardnum.length - 4); 
		var expDate = modal.find('.expire-date').val();
		var expYear = modal.find('.expire-year').val();
		
		existingCard.find('.adrs-body > .user-f-name').text(firstname);
		existingCard.find('.adrs-body .user-l-name').text(lastname);
		existingCard.find('.adrs-body .cc-last-digits').text(lastFourdigit);
		existingCard.find('.adrs-body .cc-expiry-date').text(expDate);
		existingCard.find('.adrs-body .cc-expiry-year').text(expYear);
		
		if(modal.find('.assign-sameadd').hasClass('active')){
			$('#creditCardMethodTab').find('.cc-card-ui').removeClass('active');
			$('#creditCardMethodTab').find('.set-card-status button').removeClass('active');
			$('#creditCardMethodTab').find('.set-card-status .swith-panel').show();
			$('#creditCardMethodTab').find('.set-card-status .default-card').hide();
			existingCard.addClass('active');
			existingCard.find('.adrs-body .default-card').show();
			existingCard.find('.adrs-body .swith-panel').hide();
		}
	});
	
	$(document).on("click", ".add-new-card-details", function() {
		$("#newcCreditCardForm label.error").remove();
		if(!$("#newcCreditCardForm").valid()){
			return;
		}else{
			$('#addNewCreditCard').modal('hide');
		}
		var modal = $(this).closest('.modal-content');
		var firstname = modal.find('#ccFirstName').val();
		var lastname = modal.find('#ccLastName').val();
		var cardnum = modal.find('#ccNumber').val();
		var lastFourdigit = cardnum.substr(cardnum.length - 4); 
		var expDate = modal.find('.expire-date').val();
		var expYear = modal.find('.expire-year').val();
		
		if(modal.find('.assign-sameadd').hasClass('active')){
			$('#creditCardMethodTab').find('.cc-card-ui').removeClass('active');
			$('#creditCardMethodTab').find('.set-card-status button').removeClass('active');
			$('#creditCardMethodTab').find('.set-card-status .swith-panel').show();
			$('#creditCardMethodTab').find('.set-card-status .default-card').hide();
			var classActive = "active";
			var hideDiv = "hide";
			var showDiv = "show"
			var checked = "checked";
		}else{
			var hideDiv = "show";
			var showDiv = "hide"
			var checked = "";
		}
		
		$('.add-new-card-outer-box').remove();
		$('#creditCardMethodTab .row').append('<div class="col-sm-12 col-md-6  cc-card-panel"><div class="addres-box-outr cc-card-ui '+classActive+'">	<div class="adrs-title  borderB0 marginB0"><ul class="user-ctrl"> <li> <a href="javascript:void(0);" data-toggle="modal" data-target="#addNewCreditCard" class="edit-card">Change</a> </li><li> <a href="javascript:void(0);" data-toggle="modal" data-target="#deleteCreditCard" class="delete-card">Delete</a> </li></ul></div><div class="adrs-body"><div class="cc-user-name text-ellipsis"><span class="user-name user-f-name"> ' + firstname + '</span> <span class="user-name user-l-name">' + lastname + '</span></div><div class="clearfix"></div><div class="address-text"><div class="card-number-box">xxxxxxxxxxxx<span class="cc-last-digits">' + lastFourdigit + '</span></div><div class="card-exp-date-box marginT10">Expiry Date:<span class="cc-expiry-date">' + expDate + '</span>/<span class="cc-expiry-year">' + expYear + '</span> </div></div>	<div class="set-card-status"><div class="text-default default-card '+ showDiv +'">Default</div><div class="swith-panel '+ hideDiv +'" style="display:none"><div class="switch pull-left"><button type="button" class="btn assign-sameadd btn-toggle" data-toggle="button" aria-pressed="false" autocomplete="off"><div class="handle"></div></button></div>	<div class="switch-info"><label class=" switch-label">Set as Default</label></div>	<div class="clearfix"></div></div></div></div><div class="clearfix"></div></div><i class="card-type-box visa"></i></div><div class="col-sm-12 col-md-6  cc-card-panel add-new-card-outer-box"><div class="addres-box-outr cc-card-ui" data-toggle="modal"  data-target="#addNewCreditCard"><div class="add-contact-panel sm marginT0"><i class="card-type-box newcard"></i>	 	<div class="clearfix marginT5"></div><a class="add-new-cc" href="javascript:void(0);">Add New Card </a></div></div> </div>');
		
		if(addCard > 0){
			$('.purchase-card-box .card-info-panel').removeClass('collapsed');
			$('.purchase-card-box .address-text').hide();
			
			$('.purchase-card-box .moreCards').prepend('<div class="card-info-panel collapsed"><div class="row card-info-rows">			  <div class="col-xs-5 form-group margin0">	<input type="radio" name="visa-card2" id="visa-card2" '+checked+'><label for="visa-card2"></label> <span class="card-placeholder"></span>	<span class="checkout-card-details">  Visa Card xxxxxxxxxx2826 </span> </div> <div class="col-xs-3"><span class="checkout-card-expire">' + expDate + '/' + expYear + '</span></div>  <div class="col-xs-3"><span class="checkout-user-name">' + firstname + ' ' + lastname + '</span></div> <div class="col-xs-1 text-right"><i class="expand-card icon-arrow-down"></i></div></div><div class="row card-adrs-rows"> <div class="col-sm-12 col-sm-12 padding0"><div class="address-text" style="display: block;"><h4>Billing Address</h4>  <strong>Jason Doe</strong>  <p>116 Inverness Dr. East Suite-375</p><p>C/O Castle Pines, San Jose. CA</p>  <p>United States</p></div> </div></div></div>');
		}
		
		addCard = 0;
		
		$('.add-new-card-details').removeClass('active').attr('disabled', true);
		$('.card-add-alert').slideDown();
		setTimeout(function (){
			$('.card-add-alert').slideUp();
		},5000);
	});	
	
	$(document).on("change", "#addressClone", function() {
		var modal = $(this).closest('.modal-content');
		if($(this).is(':checked')){
			$(this).closest('.sameBillingAdd').addClass('active');
			$(".sameBillingAdd.active .custom-dropdown label.error ").remove();
			modal.find('.c-country').val("US");
			modal.find('#billStateProvince').val("California");
			modal.find('#billCity').val("San Jose");
			modal.find('#billZipCode').val("90210");
			modal.find('#billAdrs1').val("116 Inverness Dr");
			modal.find('#billAdrs2').val("East Suite-375");
			
		}else{
			$(this).closest('.sameBillingAdd').removeClass('active');
			modal.find('.c-country').val("");
			modal.find('#billStateProvince').val("");
			modal.find('#billCity').val("");
			modal.find('#billZipCode').val("");
			modal.find('#billAdrs1').val("");
			modal.find('#billAdrs2').val("");
		}
	});
	
	
	$(document).on("click", ".delete-card", function() {
		$('#deleteCreditCard').find('.delete-card-success').hide();
		$('#deleteCreditCard').find('.okBtn').hide();
		$(this).closest('.cc-card-panel').addClass('remove');
	});
	
	$(document).on("click", "#deleteCreditCard .deleteCcBtn", function() {
		$('#deleteCreditCard').find('.delete-card-warning').hide();
		$('#deleteCreditCard').find('.deleteCcBtn').hide();
		$('#deleteCreditCard').find('.deleteCcBtn, .delete-qoute-cancel').hide();
		
		$('#deleteCreditCard').find('.delete-card-success').show();
		$('#deleteCreditCard').find('.okBtn').show();
		
		$('#creditCardMethodTab').find('.cc-card-panel.remove').remove();
		setTimeout(function() {
			$('#deleteCreditCard').modal('show');
		}, 500);
	});
	
	$(document).on("click", ".okBtn", function() {
		$('#deleteCreditCard').find('.delete-card-warning').show();
		$('#deleteCreditCard').find('.deleteCcBtn, .delete-qoute-cancel').show();
		$('#deleteCreditCard').find('.delete-card-success').hide();
		$('#deleteCreditCard').find('.okBtn').hide();
	});
	
	$(document).on("click", ".delete-open-card", function() {
		existingCard.find('.delete-card').trigger('click');
	});
	
	$('.errorExpiredCard').hide();
	$(document).on("change", ".expire-date, .expire-year", function() {
		var date = $('.expire-date').val();
		var year = $('.expire-year').val();
		
		if(date != ""){
			$('#ccExpDate-error').remove();
		}
		if(year != ""){
			$('#ccExpYear-error').remove();
		}
		if(date < 6 && year <= 2018){
			$('.errorExpiredCard, .cardExipredError').show();
			$('.alertError').hide();
		}else{
			$('.errorExpiredCard').hide();
			$('.alertError, .cardExipredError').hide();
		}
	});

	$('.submitForm').attr('disabled', true);

	$("#newcCreditCardForm").validate({
		rules: {
			"ccFirstName": {
				required: true
			},
			"ccLastName": {
				required: true
			},
			"ccEamil": {
				required: true,
				email: true
			},
			"ccPhone": {
				required: true
			}
		}
	});
	
	$("#newcCreditCardForm").validate({
		rules: {
			"ccFirstName": {
				required: true
			},
			"ccLastName": {
				required: false
			},
			"ccNickName": {
				required: false
			},
			"ccEmailAddress": {
				required: true
			},
			"ccContactNumber": {
				required: true
			},
			"ccNumber": {
				required: true
			},
			"ccExpDate": {
				required: true
			},
			"ccCvvNum": {
				required: true
			},
			"country": {
				required: true
			},
			"ccState": {
				required: true
			},
			"ccCity": {
				required: true
			},
			"ccZip": {
				required: true
			},
			"ccAddress": {
				required: true
			},
			"ccAddress1": {
				required: false
			},
			"ccAddress2": {
				required: false
			}
		},
		submitHandler: function(form) {
			$('.add-new-card-details, .save-card-details').attr('disabled', false);
		}
	});
	
	$(document).on("click", ".modal input[type='button']", function() {
		$('.cc-card-panel').removeClass('remove');
	});
	
	$(document).on("keyup change", "#newcCreditCardForm input, #newcCreditCardForm select", function() {	
		$('.add-new-card-details, .save-card-details').attr('disabled', false);
		$('#newcCreditCardForm .form-control').each(function() {
			var $this = $('#newcCreditCardForm .form-control');
			if ($(this).hasClass('error')) {
				$(this).closest('.form-group').addClass('error');
			} else {
				$(this).closest('.form-group').removeClass('error');
			}
		});

		if($("#newcCreditCardForm").valid()){
			$('.submitForm').attr('disabled', false);
		}else{
			$('.submitForm').attr('disabled', true);
		}

	});
	
	$(document).on("click", "#addNewCreditCard .add-new-card-details, #addNewCreditCard .save-card-details", function() {
		if($("#newcCreditCardForm").valid()){
			$('#addNewCreditCard').modal('hide');
			$('#newcCreditCardForm .form-group').removeClass('error');
		}else{
			$('#newcCreditCardForm .form-control').each(function() {
				var $this = $('#newcCreditCardForm .form-control');
				if ($(this).hasClass('error')) {
					$(this).closest('.form-group').addClass('error');
				} else {
					$(this).closest('.form-group').removeClass('error');
				}
			});
			$('.alertError').show();
			$('.cardExipredError').hide();
			$('.add-new-card-details, .save-card-details').attr('disabled', true);
		}
	});
	
	/*==== Credit Card JS End ====*/
	
	/* == Quote-Checkout == */
	//$('.payment-method-panel .purchase-Order-box').hide();
	$('.moreCards').animate({height:'230px'},100);
	$('.moreCards.invoice-card').animate({height:'252px'},100);
 	var addCard = 0;
	$(document).on("click", ".add-new-ccard", function() {
		addCard = 1;
	});
	
	$(document).on("click", ".card-info-panel .card-info-rows", function() {
		$(this).closest('.card-info-panel').siblings().removeClass('collapsed').find('.address-text').hide();
		//$(this).closest('.card-info-panel').siblings()
		$(this).closest('.card-info-panel').toggleClass('collapsed');
		$(this).closest('.card-info-panel').find('.address-text').slideToggle();
		if($('.card-info-panel').hasClass('collapsed')){
			$('.moreCards').animate({height:'355px'},500);
			$('.moreCards.invoice-card').animate({height:'380px'},100);
		}else{
			$('.moreCards').animate({height:'230px'},500);
			$('.moreCards.invoice-card').animate({height:'250px'},100);
		}
	});
	
	
	$('.show-card-list').on('click', function() {
		$('.card-info-header').show();
		$('.moreCards').show();
		$('.add-card').show();
		$(this).hide();
		$('.active-cc-detail').addClass('active');
		$('.purchase-card-box').show();
		$('.seemoreCards').show();
		
	});
	
	var option;
	var url = window.location.href;
	opt = url.match(/option=(.*)/);
	//console.log(opt);
	if (opt != null && opt.length) option = opt[1];
	
	var paymentMethodSelected;
	$(document).on("click", ".change-payment-method", function() {
		var modal = $(this).closest('.modal-content');
		var paymentMethod = modal.find('input[type="radio"]:checked').attr('id');
		paymentMethodSelected = paymentMethod
		if(paymentMethod == "credit-card"){
			$('.no-cc-error, .purchase-Order-box').hide();
			$('.active-cc-detail').removeClass('active');
			$('.active-cc-detail').show();
			
			$('.payment-method-panel .adrs-title .curnt-pay-terms span, .subscription-payment-detail .subs-payment-data:not(.po-number) span').text('Immediate');
			$('.payment-method-panel .adrs-title .curnt-pay-method span,.payment-method-panel .current-method').text('Credit Card');
			$('.payment-method-panel .purchase-card-box').show();
			$('.payment-method-panel .purchase-Order-box').hide();
			
			/* Manage Payments Changes */
			$('.subscription-payment-detail .subs-info-row').removeClass('active');
			//$('.subscription-payment-detail .purchase-Order-box').show();
			$('.subscription-payment-detail .subs-payment-data.po-number').hide();
			$('.subscription-payment-detail .subs-info-row.active .subs-payment-data .user-input').text('Credit Card');
			$('.subscription-payment-detail .subs-info-row.active .subs-payment-data .user-pay-mode').text('immediate');
			$('.pay-block-card .user-input').text('Visa Card xxxxxxxxxx4597');
			$('.pay-block-expiry .user-input').text('10/23');
			
			$('.seemoreCards').hide();
			$('.card-info-header').hide();
			$('.moreCards').hide();
			$('.add-card').hide();
			$('.show-card-list').show();
			
			
			if (option == "addCard") {
				$('.active-cc-detail').hide();
				$('.no-cc-row, .no-cc-error').show();
			} 
			
		}
		if(paymentMethod == "bill-me-later"){
			$('.no-cc-error, .active-cc-detail').hide();
			$('.purchase-Order-box').show();
			$('.payment-method-panel .adrs-title .curnt-pay-terms span, .subscription-payment-detail .subs-payment-data:not(.po-number) span').text('30 Net');
			$('.subscription-payment-detail .subs-info-row.active .subs-payment-data .user-pay-mode').text('30 Net');
			$('.payment-method-span').text('ACH/Check/Wire Transfer');
			$('.payment-method-panel .adrs-title .curnt-pay-method span, .payment-method-panel .current-method').text('ACH/Check/Wire Transfer');
			$('.payment-method-panel .purchase-Order-box').show();
			$('.payment-method-panel .purchase-card-box').hide();
			
			$('.subscription-payment-detail .subs-info-row.active .subs-payment-data .user-input').text('ACH/Check/Wire Transfer');
			$('.subscription-payment-detail .subs-payment-data.po-number').show();
			$('.subscription-payment-detail .subs-info-row').removeClass('active');
			
		}
	});
	
	$(document).on("click", ".seemoreCards", function() {
		$('.moreCards').toggleClass('active');
		$(this).toggleClass('active');
		//var h = $('.moreCards').height();
		//console.log(h);
		if($('.moreCards').hasClass('active')){
			$(this).find('span').text('See Less');
			$('.moreCards').animate({height:'380px'},500);
			$(this).addClass("active");
			$('.moreCards').niceScroll({horizrailenabled:false, cursorcolor:'#999', });
		}else{
			$(this).find('span').text('See More');
			$('.moreCards').animate({height:'230px'},500);
			$('.moreCards.invoice-card').animate({height:'250px'},100);s
			$(this).removeClass("active");
			$(":nicescroll").scrollTop(0);
			$('.moreCards').getNiceScroll().remove();
		}
	});
	
	var currenturl = window.location.href;
	var lastPathUrl = currenturl.substr(currenturl.lastIndexOf('/') + 1);
	
	//console.log(lastPathUrl);
	
	$(document).on("click", ".sales-view a", function() {
		if(paymentMethodSelected == "bill-me-later"){
			return;
		}else{
			if (lastPathUrl == "manage-payment.html") {
				sessionStorage.setItem("modificationflow", "selectCreditCard");
			}
		}
	});
	
	$(document).on("click", ".back-to-disputes", function() {
		if (lastPathUrl == "pss-dispute-detail.html") {
			sessionStorage.setItem("modificationflow", "disputeFlow");
		}
	});
	
	$(document).on("click", ".redirect-to-profile", function() {
		if (lastPathUrl == "quote-checkout.html?option=addCard") {
			sessionStorage.setItem("modificationflow", "backToCheckOut");
		}
		console.log(sessionStorage.getItem("modificationflow"));
		
		settimeout(function(){
			console.log(sessionStorage.getItem("modificationflow"));
		},500);
	});

	
	
	$(document).on('click', '.create-dispute-flag',function(e){
		if (lastPathUrl == "pss-my-invoice.html") {
			sessionStorage.setItem("modificationflow", "backToPssMyInvoice");
		}
	});

	$(document).on('click', '.create-new-dispute .icon-hammer, .action-links li a',function(e){
		if (lastPathUrl == "pss-invoice-detail.html") {
			sessionStorage.setItem("modificationflow", "backToPssInvoiceDetail");
		}

		if (lastPathUrl == "invoice-detail.html") {
			sessionStorage.setItem("modificationflow", "backToInvoiceDetail");
		}
	});
	
	
	
	if (sessionStorage.getItem("modificationflow") === null) {
		return;
	} else {
		if (sessionStorage.getItem("modificationflow") == "selectCreditCard") {
			$('.bill-later').hide();
			$('.card-details').show();
		};
		if (sessionStorage.getItem("modificationflow") == "disputeFlow") {
			$('.pss-invoice option.show-dispute').show();
			$('.pss-invoice option.show-invoice').hide();
			$('#disputePanel').show();
			$('.sidebar').find('.show-invoice').hide();
			$('.customer-invoice .quote-search').find('.form-control-placeholder').text('Search Disputes');
			setTimeout(function(){
				$('#invoicePanel').removeClass('active in');
				$('.custom-select-box-outr').find('.mcdropdown input').val('Dispute');
				$('.nav-tabs').find('li').removeClass('active');
				$('.nav-tabs').find('li:last-child').addClass('active');
				$('#disputePanel').addClass('active in');
			},500);
		};
		if (sessionStorage.getItem("modificationflow") == "backToCheckOut") {
			$('.back-to').hide();
			$('.back-to-quotes').show();
		};

		console.log(sessionStorage.getItem("modificationflow"));

		if (sessionStorage.getItem("modificationflow") == "backToPssMyInvoice") {
			$('.pss-my-inv-flag').show();
			$('.not-pss-my-inv-flag').hide();
		};

		if (sessionStorage.getItem("modificationflow") == "backToPssInvoiceDetail") {
			$('.pss-inv-btn').show();
			$('.invoice-detail-btn, .normal-invoice-btn').hide();
		};

		if (sessionStorage.getItem("modificationflow") == "backToInvoiceDetail") {
			$('.invoice-detail-btn').show();
			$('.pss-inv-btn, .normal-invoice-btn').hide();
		};

		setTimeout(function() {
			sessionStorage.setItem("modificationflow", "");
		}, 1000);
	};
	
	/* == /Quote-Checkout == */
});

/*country select*/



$(document).on('change', '.quote-init .select-country select',function(e){
	var country=$(this).val();
	if(country=='DK'){
		$('.quote-init .select-currency').val('Global Price List -UK (GBP)');
		$('.quote-init .select-currency option:first-child').val('Select').text('Select');
		$('.quote-init .select-currency').next('label').removeClass('currency-placeholder');
		$('.quote-init .select-currency').attr('disabled',false);
		$('.quote-init .select-currency').find('option.single-currency').hide();
		$('.quote-init .select-currency').find('option.multi-currency').show();
		//$('.quote-init .select-currency + label').addClass('label-up');
	}else{
		$('.quote-init .select-currency').attr('disabled',true);
		$('.quote-init .select-currency').val('Australia Price List Ex (AUD)');
		$('.quote-init .select-currency').next('label').addClass('currency-placeholder');
		$('.quote-init .select-currency').find('option.single-currency').show();
		$('.quote-init .select-currency').find('option.multi-currency').hide();
	    $('.quote-init .select-currency + label').removeClass('label-up');
	}
});
/*country select*/
$(document).on('change', '.select-country.quoteCountrySelect.sortQuotesTiles select', function() {
	setTimeout(function() {
		$('.clearAllFilter').show();
	}, 300);
});


$(document).on('keyup keypress blur', '.fluid-width', function() {
	$(this).attr('size', $(this).val().length+20);  
});

var a = $("#a").val();
var b = $("#b").val();   
$("submit").on("click", function(){
	var sum = a + b;
	alert(sum);         
})

 
$(document).on('keyup keypress blur', '#disputeamount', function() {
	//$("#disputeamount").keyup(function(){
	//	alert('asd');
	 setTimeout(function(){ $('#country-error').remove(); }, 500);
		
	});