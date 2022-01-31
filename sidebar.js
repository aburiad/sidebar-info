//sidebar
//button name closebtn
	$('.open-sidebar').on('click', function () {
		$('.offcanvas-menu-wrap').addClass('sidebar-open');
		$('.offcanvas-overlay').addClass('overlay-open');
	})

	$('.side-info-close,.offcanvas-overlay,.close-btn').on('click', function () {
		$('.offcanvas-menu-wrap').removeClass('sidebar-open');
		$('.offcanvas-overlay').removeClass('overlay-open');
	})
