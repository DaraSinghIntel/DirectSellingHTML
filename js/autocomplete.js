var selectedBilling='',selectedBusiness='', selectedContactEmail='', selectedContactPhone='', address='', selectsharedname='';
var isBillingAddress=false,isUserContact=false,isAdditionalContact=false,showRecomded=false;;
$(document).ready(function () {
    
    var skuData = [{
			label : "Jane Smith",
			email : "jsmith@apple.com",
			phone : "821-211-4453"

		}, {
			label : "Jaden Smith",
			email : "jdsmith@apple.com",
			phone : "821-221-4453"
		}, {
			label : "Jill Bates",
			email : "jbates@apple.com",
			phone : "821-231-4453"
		}, {
			label : "Jignesh Acharya",
			email : "jacharya@apple.com",
			phone : "821-241-4453"
		},{
			label : "Jane Smith",
			email : "jsmith@apple.com",
			phone : "821-251-4453"

		}, {
			label : "Jaden Smith",
			email : "jdsmith@apple.com",
			phone : "821-261-4453"
		}, {
			label : "Jill Bates",
			email : "jbates@apple.com",
			phone : "821-271-4453"
		}, {
			label : "Jignesh Acharya",
			email : "jacharya@apple.com",
			phone : "821-281-4453"
		},{
			label : "Jane Smith",
			email : "jsmith@apple.com",
			phone : "821-291-4453"

		}, {
			label : "Jaden Smith",
			email : "jdsmith@apple.com",
			phone : "821-201-4453"
		}, {
			label : "Jill Bates",
			email : "jbates@apple.com",
			phone : "821-121-4453"
		}, {
			label : "Jignesh Acharya",
			email : "jacharya@apple.com",
			phone : "821-121-4453"
		}
	];

    var prodData = [
        {
			offer : "CIS-IPICS-VMA",
			desciption : "IPICS 4.x Virtual Bundle",
			product : "Unified Access Breakaway Cisco Prime",
            listprice : "0.00"

		},{
			offer : "CIS-IPICS4-HA-K9=",
			desciption : "High Availability Secondary Server Bundle",
			product : "Unified Computing - AS Onsite (UCS Startup Accelerator)",
            listprice : "10,000.00"
		},{
			offer : "CIS-IPICS4.0-UG=",
			desciption : "IPICS Server Software Upgrade ",
			product : "Russian-Only Unified ",
            listprice : "5,000.00"
		}
    ];
  
    var massProdData = [
        {
			name : "Ruckus Pizza Inc.",
			bitllToSiteId : "2379503297020395",
			customerId : "2379503297020395",
            operatingUnit : "Cisco Netherlands Operating Unit",
            federalType : "Non-Federal",
            flooringBid : "Yes",
            address : "425 E Tasman Dr, San Jose, CA 95134"
			

		},{
			name : "Ruckus Pizza Inc.",
			bitllToSiteId : "2379503297020395",
			customerId : "2379503297020395",
            operatingUnit : "Cisco Netherlands Operating Unit",
            federalType : "Federal-Government",
            flooringBid : "No",
            address : "425 E Tasman Dr, San Jose, CA 95134"
		},{
			name : "Ruckus Pizza Inc.",
			bitllToSiteId : "2379503297020395",
			customerId : "2379503297020395",
            operatingUnit : "Cisco Netherlands Operating Unit",
            federalType : "Non-Federal",
            flooringBid : "Yes",
            address : "425 E Tasman Dr, San Jose, CA 95134"
		},{
			name : "Ruckus Pizza Inc.",
			bitllToSiteId : "2379503297020395",
			customerId : "2379503297020395",
            operatingUnit : "Cisco Netherlands Operating Unit",
            federalType : "Non-Federal",
            flooringBid : "No",
            address : "425 E Tasman Dr, San Jose, CA 95134"
		}
	];
    var addressData = [
        {
			label : "Alexender Open Systems",
			billingId : "87583434",
			address : "116 INVERNESS DRIVE EAST SUITE 375 C/O CASTLE PINES CAPITAL",
            billusage : "YES",
            businessmodel : "--",
			operatingunit : "CISCO US",
			flooringId : "Yes"
		},{
			label : "Alexender Open Systems",
			billingId : "87583434",
			address : "116 INVERNESS DRIVE EAST SUITE 375 C/O CASTLE PINES CAPITAL",
            billusage : "No",
            businessmodel : "--",
			operatingunit : "CISCO US",
			flooringId : "Yes"
		},{
			label : "Alexender Open Systems",
			billingId : "87583434",
			address : "116 INVERNESS DRIVE EAST SUITE 375 C/O CASTLE PINES CAPITAL",
            billusage : "YES",
            businessmodel : "--",
			operatingunit : "CISCO US",
			flooringId : "Yes"
		}
	];

    var sharedData = [
        {
			label : "Jill Bates",
			email : "jbates@apple.com",
			ccoId : "jasmit"
		},{
			label : "Jignesh Acharya",
			email : "jacharya@apple.com",
			ccoId : "jastev"
		},{
			label : "Jane Syly",
			email : "jsmith@apple.com",
			ccoId : "jaschk"
		},{
			label : "Jaden Taylor",
			email : "jdsmith@apple.com",
			ccoId : "jasyly"
		},{
			label : "Jill Trochowiski",
			email : "jbates@apple.com",
			ccoId : "jataylo"
		}
	];
    
    var billingAddressData = [
        {
			label : "Ruckus Pizza",
			billingId : "87583434",
			address : "116 INVERNESS DRIVE EAST SUITE 375 C/O CASTLE PINES CAPITAL",
            city : "San Jose",
            state : "CA",
			country : "United States",
			zip : "90265"
		},{
			label : "Ruckus Pizza",
			billingId : "87583434",
			address : "116 INVERNESS DRIVE EAST SUITE 375 C/O CASTLE PINES CAPITAL",
            city : "San Jose",
            state : "CA",
			country : "United States",
			zip : "90331"
		},{
			label : "Ruckus Pizza",
			billingId : "87583434",
			address : "116 INVERNESS DRIVE EAST SUITE 375 C/O CASTLE PINES CAPITAL",
            city : "San Jose",
            state : "CA",
			country : "United States",
			zip : "90210"
		}
    ];

    var modifContactsData = [{
            label : "Jane Smith",
            email : "jsmith@apple.com",
            phone : "821-211-4453",
            fax : "1(800)123-4567"
        }, {
            label : "Jaden Smith",
            email : "jdsmith@apple.com",
            phone : "821-221-4453",
            fax : "1(800)123-4567"
        }, {
            label : "Jill Bates",
            email : "jbates@apple.com",
            phone : "821-231-4453",
            fax : "1(800)123-4567"
        }, {
            label : "Jignesh Acharya",
            email : "jacharya@apple.com",
            phone : "821-241-4453",
            fax : "1(800)123-4567"
        },{
            label : "Jane Smith",
            email : "jsmith@apple.com",
            phone : "821-251-4453",
            fax : "1(800)123-4567"
        }, {
            label : "Jaden Smith",
            email : "jdsmith@apple.com",
            phone : "821-261-4453",
            fax : "1(800)123-4567"
        }, {
            label : "Jill Bates",
            email : "jbates@apple.com",
            phone : "821-271-4453",
            fax : "1(800)123-4567"
        }, {
            label : "Jignesh Acharya",
            email : "jacharya@apple.com",
            phone : "821-281-4453",
            fax : "1(800)123-4567"
        },{
            label : "Jane Smith",
            email : "jsmith@apple.com",
            phone : "821-291-4453",
            fax : "1(800)123-4567"
        }, {
            label : "Jaden Smith",
            email : "jdsmith@apple.com",
            phone : "821-201-4453",
            fax : "1(800)123-4567"
        }, {
            label : "Jill Bates",
            email : "jbates@apple.com",
            phone : "821-121-4453",
            fax : "1(800)123-4567"
        }, {
            label : "Jignesh Acharya",
            email : "jacharya@apple.com",
            phone : "821-121-4453",
            fax : "1(800)123-4567"
        }
    ];
    var bindAutoComp=function($el){
        var noRecordFound = false;
        var notShownoRecord=false;
        if($el.hasClass('additional-contacts')){
            var notShownoRecord=true;
        }
		if($el.hasClass('search-contacts')){
			address=false;
		}
        var autCom = $el.autocomplete({
                minLength : 0,
                source : function (request, response) {
                    var matcher = new RegExp($.ui.autocomplete.escapeRegex(request.term), "i");
                    //console.log($el);
                    if($el.hasClass('product-name-box') || $el.hasClass('add-to-quote') || $el.hasClass('quote-product')){
                        var res =$.grep(prodData, function (value) {
                            return matcher.test(value.offer) || matcher.test(value.desciption) || matcher.test(value.product);
                        });
                        response(res);
                        return;
                    }if($el.hasClass('mass-autosearch')){
                        var res =$.grep(massProdData, function (value) {
                            return matcher.test(value.name) || matcher.test(value.bitllToSiteId) || matcher.test(value.customerId) || matcher.test(value.operatingUnit) || matcher.test(value.federalType) || matcher.test(value.address);
                        });
                        response(res);
                        return;
                    }if($el.hasClass('shared-team')){
                        var res =$.grep(sharedData, function (value) {
                            return matcher.test(value.label) || matcher.test(value.email) || matcher.test(value.ccoId);
                        });
                        response(res);
                        return;
                    }if($el.hasClass('billing-address-search') && !$el.hasClass('search-contacts')){
                        console.log(4444);
                        var res =$.grep(billingAddressData, function (value) {
                            return matcher.test(value.label) || matcher.test(value.billingId) || matcher.test(value.address) || matcher.test(value.city) || matcher.test(value.zip);
                        });
                        response(res);
                        return;
                    }if($el.hasClass('modify-contacts')){
                        //console.log(4444);
                        var res =$.grep(modifContactsData, function (value) {
                            return matcher.test(value.label) || matcher.test(value.email) || matcher.test(value.phone) || matcher.test(value.fax);
                        });
                        response(res);
                        return;
                    }else{
                        console.log(address,111,$el.hasClass('search-contacts'));
                        if (address >= 1 && !$el.hasClass('search-contacts')){
                            var res =$.grep(addressData, function (value) {
                                return matcher.test(value.label) || matcher.test(value.billingId) || matcher.test(value.address) || matcher.test(value.billusage) || matcher.test(value.billusage) || matcher.test(value.operatingunit) || matcher.test(value.flooringId);
                            });
                            response(res);
                        }else{
                            var res =$.grep(skuData, function (value) {
                                return matcher.test(value.label) || matcher.test(value.email) || matcher.test(value.phone);
                            });
                            response(res);
                        }
                        
                    }
                },
                response : function (event, ui) {
                    var $this = $(this);
                    if (!ui.content.length) {
                        var noResult = {
                            offer:"",
                            billingId:"",
                            address:"",
                            city:"",
                            state:"",
                            country:"",
                            zip:"",
                            fax:"",
                            desciption:"",
                            product:"",
                            label : "",
                            email : "",
                            phone : "",
                            name : "",
                            bitllToSiteId : "",
                            customerId : "",
                            operatingUnit : "",
                            federalType : "",
                            address : ""
                        };
                        ui.content.push(noResult);
                        noRecordFound = true;
      
                    } else {
                        noRecordFound = false;
                    }
                },
                select : function (event, ui) {
                    selectedContactEmail =  ui.item.email;
                    selectedContactPhone =  ui.item.phone;
                    var value=typeof ui.item.label!='undefined'?ui.item.label:ui.item.name;
                    $(this).val(value.replace(/(<([^>]+)>)/ig, ""));
                    if($('.modal-major-tabs ul li.billing-tab').hasClass('selected')){
                        selectedBilling=$(this).val();
                    }else{
                        selectedBusiness=$(this).val();
                    }
                    $(this).trigger('blur');
                    _afterSelect();
                    if(address >= 1){
                        if ($el.hasClass('billing-address-search')){
                            isBillingAddress=true;
                            isUserContact=false;
                            //$el.closest('.search-panel').hide();
                            $('.contact-type-row,.contact-type-row .adrs-panel-outr').show();
                        }else if($el.hasClass('search-contacts')){
                            isBillingAddress=false;
                            isUserContact=true;
                            $('.shipping-adrs-box-outr').hide();
                            $('.search-contact-form').find('.contact-outr-box.internal-card .adrs-panel-outr').show();
                            
                        }else{
                            isBillingAddress=false;
                            isUserContact=false;
                            $('.shipping-adrs-box-outr').show();
                        }
                        //$('.adrs-panel-outr, .contact-type-row').hide();
                    }else{
                        if ($el.hasClass('billing-address-search')){
							isBillingAddress=true;
                            //$el.closest('.search-panel').hide();
                            $('.contact-type-row,.contact-type-row .adrs-panel-outr').show();
                        }else if ($el.hasClass('mass-autosearch')){
                            $('.mass-contact-panel .add-contact-panel,.add-product-form').hide();
                            $('.mass-contact-panel .mass-adrs-info').show();
                        }else{
							isBillingAddress=false;
                            $('.adrs-panel-outr, .contact-type-row').not('.mass-contact-add').show();
                        }
                        $('.shipping-adrs-box-outr').hide();
						//$('.add-billing-contact').prop('disabled', false);
                        //$('.newcontactlistouter').show();
                    }
                    selectsharedname = 1;
					$('.config-add-btn, .add-share-contact .addContact, .add-billing-contact').attr('disabled', false);
                    $('.no-contacts-panel').hide();
                    $('#modifyContacts .adrs-bio-row,#modifyContacts .addNewAddressRow').show();
                    $('.mass-contact, .contactAddOuterDiv .mass-contact-add').removeClass('disabled');
                    return false;
                },
                open : function (event, ui) {
                    if($el.hasClass('product-name-box') || $el.hasClass('add-to-quote')){
                     $('ul.ui-autocomplete').prepend('<li class="header"><div width="100%"><span class="col-xs-3 "> <span class="relative autocompleteCheckbox"><label></label></span>OFFER</span><span class="col-xs-3">DESCRIPTION</span><span class="col-xs-3">PRODUCT FAMILY</span><span class="col-xs-3 text-right">LIST PRICE <span class="usdPrice">(USD)</span></span></div></li>');
                    }else if ($el.hasClass('shared-team') && !noRecordFound){
                        $('ul.ui-autocomplete').prepend('<li class="header"><div width="100%"><span class="col-xs-4">NAME</span><span class="col-xs-4">E-MAIL</span><span class="col-xs-4">CCO ID</span></div></li>');
                    }else if ($el.hasClass('billing-address-search') && !noRecordFound && !$el.hasClass('search-contacts')){
                        $('ul.ui-autocomplete').prepend('<li class="header"><div width="100%"><span class="col-xs-2">COMPANY</span><span class="col-xs-2">BILLING ID</span><span class="col-xs-2">ADDRESS</span><span class="col-xs-2">CITY</span><span class="col-xs-1">STATE</span><span class="col-xs-2">COUNTRY</span><span class="col-xs-1">ZIP</span></div></li>');
                    }else if ($el.hasClass('modify-contacts') && !noRecordFound){
                        $('ul.ui-autocomplete').prepend('<li class="header"><div width="100%"><span class="col-xs-3">Name</span><span class="col-xs-3">EMAIL-ID</span><span class="col-xs-3">PHONE NUMBER</span><span class="col-xs-3">FAX NUMBER</span></div></li>');
                    }else if ($el.hasClass('mass-autosearch') && !noRecordFound){
                        $('ul.ui-autocomplete').prepend('<li class="header"><div width="100%"><span class="name-col">Name</span><span class="bill-col">Bill to Site ID</span><span class="customer-col">Customer ID</span><span class="unit-col">Operating Unit</span><span class="federal-col">Federal Type</span><span class="flooring-col">Flooring BID</span><span class="adrss-col">Address</span></div></li>');
                    }else{
                        if(address >= 1 && !noRecordFound && !$el.hasClass('search-contacts')){
                            $('ul.ui-autocomplete').prepend('<li class="address-header"><div width="100%"><span class="col-xs-3">Company </span><span class="col-xs-3">Billing Id</span><span class="col-xs-3">Address</span><span class="col-xs-3 text-right">Bill to Usage</span><span class="col-xs-3">business Model</span><span class="col-xs-3">Operating Unit</span><span class="col-xs-3 text-right">Flooring B Id</span></div></li>');
                        }else if(!noRecordFound){
                            $('ul.ui-autocomplete').prepend('<li class="header"><div width="100%"><span class="col-xs-4"> Name</span><span class="col-xs-4">Email Id</span><span class="col-xs-4">Phone Number</span></div></li>');
                        }
                    }
                    //setTimeout(function(){  }, 3000);
                    $widget = $(event.target).autocomplete("widget");
                    $(this).closest('div').find(".search-sugg-wrap-des").show();
                },
                close : function (event, ui) {
                },
                create : function (event, ui) {
                    $ds = $(this).autocomplete("widget").detach();
                    $(this).closest('div').find(".search-sugg-wrap-des").append($(this).autocomplete("widget").detach())
                },
                search: function( event, ui ) {
                   if(event.which == 16 || event.which == 17 )
                    event.preventDefault();
                }
            });
        autCom.autocomplete("instance")._renderItem = function (ul, item) {
            //console.log(item);
            if($el.hasClass('product-name-box')){
                item.label = item.offer.replace(new RegExp("(?![^&;]+;)(?!<[^<>]*)(" + $.ui.autocomplete.escapeRegex(this.term) + ")(?![^<>]*>)(?![^&;]+;)", "gi"), "<strong>$1</strong>");
                item.desciption = item.desciption.replace(new RegExp("(?![^&;]+;)(?!<[^<>]*)(" + $.ui.autocomplete.escapeRegex(this.term) + ")(?![^<>]*>)(?![^&;]+;)", "gi"), "<strong>$1</strong>");
                item.product = item.product.replace(new RegExp("(?![^&;]+;)(?!<[^<>]*)(" + $.ui.autocomplete.escapeRegex(this.term) + ")(?![^<>]*>)(?![^&;]+;)", "gi"), "<strong>$1</strong>");
                item.listprice = item.listprice.replace(new RegExp("(?![^&;]+;)(?!<[^<>]*)(" + $.ui.autocomplete.escapeRegex(this.term) + ")(?![^<>]*>)(?![^&;]+;)", "gi"), "<strong>$1</strong>");
            }else if($el.hasClass('quote-product')){
                item.label = item.offer.replace(new RegExp("(?![^&;]+;)(?!<[^<>]*)(" + $.ui.autocomplete.escapeRegex(this.term) + ")(?![^<>]*>)(?![^&;]+;)", "gi"), "<strong>$1</strong>");
                item.desciption = item.desciption.replace(new RegExp("(?![^&;]+;)(?!<[^<>]*)(" + $.ui.autocomplete.escapeRegex(this.term) + ")(?![^<>]*>)(?![^&;]+;)", "gi"), "<strong>$1</strong>");
                item.product = item.product.replace(new RegExp("(?![^&;]+;)(?!<[^<>]*)(" + $.ui.autocomplete.escapeRegex(this.term) + ")(?![^<>]*>)(?![^&;]+;)", "gi"), "<strong>$1</strong>");
                item.listprice = item.listprice.replace(new RegExp("(?![^&;]+;)(?!<[^<>]*)(" + $.ui.autocomplete.escapeRegex(this.term) + ")(?![^<>]*>)(?![^&;]+;)", "gi"), "<strong>$1</strong>");
            }else if($el.hasClass('shared-team')){
                item.label = item.label.replace(new RegExp("(?![^&;]+;)(?!<[^<>]*)(" + $.ui.autocomplete.escapeRegex(this.term) + ")(?![^<>]*>)(?![^&;]+;)", "gi"), "<strong>$1</strong>");
                item.email = item.email.replace(new RegExp("(?![^&;]+;)(?!<[^<>]*)(" + $.ui.autocomplete.escapeRegex(this.term) + ")(?![^<>]*>)(?![^&;]+;)", "gi"), "<strong>$1</strong>");
            }else if($el.hasClass('billing-address-search')){
                item.label = item.label.replace(new RegExp("(?![^&;]+;)(?!<[^<>]*)(" + $.ui.autocomplete.escapeRegex(this.term) + ")(?![^<>]*>)(?![^&;]+;)", "gi"), "<strong>$1</strong>");
                item.billingId = item.billingId.replace(new RegExp("(?![^&;]+;)(?!<[^<>]*)(" + $.ui.autocomplete.escapeRegex(this.term) + ")(?![^<>]*>)(?![^&;]+;)", "gi"), "<strong>$1</strong>");
                item.address = item.address.replace(new RegExp("(?![^&;]+;)(?!<[^<>]*)(" + $.ui.autocomplete.escapeRegex(this.term) + ")(?![^<>]*>)(?![^&;]+;)", "gi"), "<strong>$1</strong>");
                item.city = item.city.replace(new RegExp("(?![^&;]+;)(?!<[^<>]*)(" + $.ui.autocomplete.escapeRegex(this.term) + ")(?![^<>]*>)(?![^&;]+;)", "gi"), "<strong>$1</strong>");
                item.state = item.state.replace(new RegExp("(?![^&;]+;)(?!<[^<>]*)(" + $.ui.autocomplete.escapeRegex(this.term) + ")(?![^<>]*>)(?![^&;]+;)", "gi"), "<strong>$1</strong>");
                item.country = item.country.replace(new RegExp("(?![^&;]+;)(?!<[^<>]*)(" + $.ui.autocomplete.escapeRegex(this.term) + ")(?![^<>]*>)(?![^&;]+;)", "gi"), "<strong>$1</strong>");
                item.zip = item.zip.replace(new RegExp("(?![^&;]+;)(?!<[^<>]*)(" + $.ui.autocomplete.escapeRegex(this.term) + ")(?![^<>]*>)(?![^&;]+;)", "gi"), "<strong>$1</strong>");
            }else if($el.hasClass('modify-contacts')){
                item.label = item.label.replace(new RegExp("(?![^&;]+;)(?!<[^<>]*)(" + $.ui.autocomplete.escapeRegex(this.term) + ")(?![^<>]*>)(?![^&;]+;)", "gi"), "<strong>$1</strong>");
                item.email = item.email.replace(new RegExp("(?![^&;]+;)(?!<[^<>]*)(" + $.ui.autocomplete.escapeRegex(this.term) + ")(?![^<>]*>)(?![^&;]+;)", "gi"), "<strong>$1</strong>");
                item.phone = item.phone.replace(new RegExp("(?![^&;]+;)(?!<[^<>]*)(" + $.ui.autocomplete.escapeRegex(this.term) + ")(?![^<>]*>)(?![^&;]+;)", "gi"), "<strong>$1</strong>");
                item.fax = item.fax.replace(new RegExp("(?![^&;]+;)(?!<[^<>]*)(" + $.ui.autocomplete.escapeRegex(this.term) + ")(?![^<>]*>)(?![^&;]+;)", "gi"), "<strong>$1</strong>");
            }else if($el.hasClass('mass-autosearch')){
                item.name = item.name.replace(new RegExp("(?![^&;]+;)(?!<[^<>]*)(" + $.ui.autocomplete.escapeRegex(this.term) + ")(?![^<>]*>)(?![^&;]+;)", "gi"), "<strong>$1</strong>");
                item.bitllToSiteId = item.bitllToSiteId.replace(new RegExp("(?![^&;]+;)(?!<[^<>]*)(" + $.ui.autocomplete.escapeRegex(this.term) + ")(?![^<>]*>)(?![^&;]+;)", "gi"), "<strong>$1</strong>");
                item.customerId = item.customerId.replace(new RegExp("(?![^&;]+;)(?!<[^<>]*)(" + $.ui.autocomplete.escapeRegex(this.term) + ")(?![^<>]*>)(?![^&;]+;)", "gi"), "<strong>$1</strong>");
                item.operatingUnit = item.operatingUnit.replace(new RegExp("(?![^&;]+;)(?!<[^<>]*)(" + $.ui.autocomplete.escapeRegex(this.term) + ")(?![^<>]*>)(?![^&;]+;)", "gi"), "<strong>$1</strong>");
                item.federalType = item.federalType.replace(new RegExp("(?![^&;]+;)(?!<[^<>]*)(" + $.ui.autocomplete.escapeRegex(this.term) + ")(?![^<>]*>)(?![^&;]+;)", "gi"), "<strong>$1</strong>");
                item.address = item.address.replace(new RegExp("(?![^&;]+;)(?!<[^<>]*)(" + $.ui.autocomplete.escapeRegex(this.term) + ")(?![^<>]*>)(?![^&;]+;)", "gi"), "<strong>$1</strong>");
            }else{
                if (address >= 1 && !$el.hasClass('search-contacts')){
                    item.label = item.label.replace(new RegExp("(?![^&;]+;)(?!<[^<>]*)(" + $.ui.autocomplete.escapeRegex(this.term) + ")(?![^<>]*>)(?![^&;]+;)", "gi"), "<strong>$1</strong>");
                    item.billingId = item.billingId.replace(new RegExp("(?![^&;]+;)(?!<[^<>]*)(" + $.ui.autocomplete.escapeRegex(this.term) + ")(?![^<>]*>)(?![^&;]+;)", "gi"), "<strong>$1</strong>");
                    item.address = item.address.replace(new RegExp("(?![^&;]+;)(?!<[^<>]*)(" + $.ui.autocomplete.escapeRegex(this.term) + ")(?![^<>]*>)(?![^&;]+;)", "gi"), "<strong>$1</strong>");

                    item.billusage = item.billusage.replace(new RegExp("(?![^&;]+;)(?!<[^<>]*)(" + $.ui.autocomplete.escapeRegex(this.term) + ")(?![^<>]*>)(?![^&;]+;)", "gi"), "<strong>$1</strong>");
                    item.businessmodel = item.businessmodel.replace(new RegExp("(?![^&;]+;)(?!<[^<>]*)(" + $.ui.autocomplete.escapeRegex(this.term) + ")(?![^<>]*>)(?![^&;]+;)", "gi"), "<strong>$1</strong>");
                    item.operatingunit = item.operatingunit.replace(new RegExp("(?![^&;]+;)(?!<[^<>]*)(" + $.ui.autocomplete.escapeRegex(this.term) + ")(?![^<>]*>)(?![^&;]+;)", "gi"), "<strong>$1</strong>");

                    item.flooringId = item.flooringId.replace(new RegExp("(?![^&;]+;)(?!<[^<>]*)(" + $.ui.autocomplete.escapeRegex(this.term) + ")(?![^<>]*>)(?![^&;]+;)", "gi"), "<strong>$1</strong>");
                }else{
                    item.label = item.label.replace(new RegExp("(?![^&;]+;)(?!<[^<>]*)(" + $.ui.autocomplete.escapeRegex(this.term) + ")(?![^<>]*>)(?![^&;]+;)", "gi"), "<strong>$1</strong>");
                    item.email = item.email.replace(new RegExp("(?![^&;]+;)(?!<[^<>]*)(" + $.ui.autocomplete.escapeRegex(this.term) + ")(?![^<>]*>)(?![^&;]+;)", "gi"), "<strong>$1</strong>");
                    item.phone = item.phone.replace(new RegExp("(?![^&;]+;)(?!<[^<>]*)(" + $.ui.autocomplete.escapeRegex(this.term) + ")(?![^<>]*>)(?![^&;]+;)", "gi"), "<strong>$1</strong>");
                }
                
            }
            if(noRecordFound && !notShownoRecord  && $el.hasClass('shared-team') ){
                console.log(noRecordFound, notShownoRecord);
                return $("<li>")
                .append("<div width='100%'><div class='no-found text-center'><img src='images/contact-search.svg' alt=''/><h4><span>We did not find any contacts matching your search</span></h4></div>")
                .appendTo(ul);
            }
            else if(noRecordFound && !notShownoRecord){
                if($el.hasClass('mass-autosearch')){
                    return $("<li>")
                    .append("<div width='100%'><div class='no-found text-center'><img src='images/contact-search.svg' alt=''/><h4><span>We did not find any contacts matching your search</span></h4></div>")
                    .appendTo(ul);
                }else{
                    var createTitle="Create New Business Contact";
                    var createClass;
                    if(isAdditionalContact){
                        createTitle="Create New Additional Contact";
                        createClass = "";
                    }else if($el.hasClass('billing-address-search')){
                        createTitle="Create New Billing Address";
                        createClass = "";
                    }else if($el.hasClass('modify-contacts')){
                        createTitle="Create New Contact Address";
                        createClass = "modifyNewCont";
                    }
                    else if($el.hasClass('search-contacts')){
                        createClass = "modifyNewCont";
                    }
                    return $("<li>")
                    .append("<div width='100%'><div class='no-found text-center'><img src='images/contact-search.svg' alt=''/><h4><span>We did not find any contacts matching your search</span></h4> <input class='btn btn-primary create-new-contact "+createClass+"' value='"+createTitle+"' type='button'></div>")
                    .appendTo(ul);
                }
            }else if( noRecordFound && notShownoRecord ){
                return $("<li>")
                .append("<div width='100%'><div class='no-found text-center'><img src='images/contact-search.svg' alt=''/><h4><span>We did not find any contacts matching your search</span></h4></div>")
                .appendTo(ul);
            }else if($el.hasClass('product-name-box')){
                return $("<li>")
                .append("<div width='100%'><span class='col-xs-3'> <span class='relative autocompleteCheckbox'><label></label></span>" + item.label + "</span><span class='col-xs-3'>" + item.desciption + "</span><span class='col-xs-3'>" + item.product + "</span><span class='col-xs-3 text-right'>" + item.listprice + "</span></div>")
                .appendTo(ul);
            }else if($el.hasClass('quote-product')){
                return $("<li>")
                .append("<div width='100%'><span class='col-xs-3'> <span class='relative autocompleteCheckbox'><label></label></span>" + item.label + "</span><span class='col-xs-3'>" + item.desciption + "</span><span class='col-xs-3'>" + item.product + "</span><span class='col-xs-3 text-right'>" + item.listprice + "</span></div>")
                .appendTo(ul);
            }else if($el.hasClass('shared-team')){
                return $("<li>")
                .append("<div width='100%'><span class='col-xs-4'>" + item.label + "</span><span class='col-xs-4'>" + item.email + "</span><span class='col-xs-4'>" + item.ccoId + "</span></div>")
                .appendTo(ul);
            }else if($el.hasClass('billing-address-search') && !$el.hasClass('search-contacts')){
                //console.log(8888);
                return $("<li>")
                .append("<div width='100%'><span class='col-xs-2'>" + item.label + "</span><span class='col-xs-2'>" + item.billingId + "</span><span class='col-xs-2'>" + item.address + "</span><span class='col-xs-2'>" + item.city + "</span><span class='col-xs-1'>" + item.state + "</span><span class='col-xs-2'>" + item.country + "</span><span class='col-xs-1'>" + item.zip + "</span></div>")
                .appendTo(ul);
            }else if($el.hasClass('modify-contacts')){
                return $("<li>")
                .append("<div width='100%'><span class='col-xs-3'>" + item.label + "</span><span class='col-xs-3'>" + item.email + "</span><span class='col-xs-3'><i class='ico-phone contacts-icon'></i>" + item.phone + "</span><span class='col-xs-3'><i class='icon-fax'></i>" + item.fax + "</span></div>")
                .appendTo(ul);
            }else if($el.hasClass('mass-autosearch')){
                return $("<li>")
                .append("<div width='100%'><span class='name-col'> <span class='relative autocompleteCheckbox'><label></label></span>" + item.name + "</span><span class='bill-col text-left'>" + item.bitllToSiteId + "</span><span class='customer-col text-left'>" + item.customerId + "</span><span class='unit-col'>" + item.operatingUnit + "</span><span class='federal-col'>" + item.federalType + "</span><span class='flooring-col'>" + item.flooringBid + "</span><span class='adrss-col'>" + item.address + "</span></div>")
                .appendTo(ul);
            }else{

                if (address >= 1  && !$el.hasClass('search-contacts')){
                    return $("<li>")
                    .append("<div width='100%'><span class='col-xs-2'><span class='relative autocompleteCheckbox'></span>" + item.label + "</span><span class='col-xs-1'>" + item.billingId + "</span><span class='col-xs-4'>" + item.address + "</span><span class='col-xs-1'>" + item.billusage + "</span><span class='col-xs-1'>" + item.businessmodel + "</span><span class='col-xs-2'>" + item.operatingunit + "</span><span class='col-xs-1'>" + item.flooringId + "</span></div>")
                    .appendTo(ul);
                }else{
                    return $("<li>")
                    .append("<div width='100%'><span class='col-xs-4'> <span class='relative autocompleteCheckbox'></span>" + item.label + "</span><span class='col-xs-4'>" + item.email + "</span><span class='col-xs-4'><i class='ico-phone contacts-icon'></i>" + item.phone + "</span></div>")
                    .appendTo(ul);
                }
                
            }
            $(ul).closest('.search-sugg-wrap-des').show();
        };
    
        autCom.autocomplete("instance")._renderMenu = function (ul, items) {
            var that = this;
            $.each(items, function (index, item) {
                that._renderItemData(ul, item);
            });
        }
    }

    if( $(".modify-contacts").length ){
        bindAutoComp($(".modify-contacts"));
    };
	
	if( $(".quote-product").length ){
        bindAutoComp($(".quote-product"));
    };

    if( $(".business-contacts").length ){
        bindAutoComp($(".business-contacts"));
    };

    if( $(".mass-autosearch").length ){
        bindAutoComp($(".mass-autosearch"));
    };

    if( $(".shared-team").length ){
        bindAutoComp($(".shared-team"));
    };
	if( $(".search-contacts").length ){
		bindAutoComp($(".search-contacts"));
		$('#billingContacts').find('.contact-type-row').remove();
    };

    //bindAutoComp($(".business-contacts"));
    //bindAutoComp($(".quote-product"));
    //bindAutoComp($(".additional-contacts"));
    //bindAutoComp($(".product-name-box"));

	$(".business-contacts").on("focus", function () {
        var value=$(this).val();
        var $this=$(this);
		if (value.length){
            $(".business-contacts").autocomplete("search",value);
        }
    });
    $(".business-contacts").on("keyup", function () {
        var value=$(this).val();
        var $this=$(this);
        if (value.length==0){
            $('.modal-major-tabs ul li.billing-tab a').addClass('disabled');
        }
    });
    function _afterSelect() {
        $('.usesameaddressouter').hide();
		if ($('.business-contacts').val() != '') {
            $('.modal-major-tabs ul li.billing-tab a').removeClass('disabled');
			//$('.proceed-btn, .add-billing-contact').attr('disabled', false);
		}else if($('.search-contacts').val() != ''){
            $('.add-mass-contact').attr('disabled', false); 
            $('#massPrimaryContacts .adrs-bio-row').show();
        }else {
            $('.modal-major-tabs ul li.billing-tab a').addClass('disabled');
           // $('.proceed-btn, .add-billing-contact').attr('disabled', true);
        }
        $('.add-mass-contact, .add-mass-contactId, .add-mass-contact').attr('disabled', false);
        $('#massPrimaryContacts .adrs-panel-outr').show();
    }
    $('.business-contacts').on('blur', function () {
		if ($(this).val() != '') {
			//$('.proceed-btn, .add-billing-contact').attr('disabled', false);
		} else {
           // $('.proceed-btn, .add-billing-contact').attr('disabled', true);
		}
    });
    
});