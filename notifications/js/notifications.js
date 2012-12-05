function supportNotifications() {
	return (window.webkitNotifications || Notification);
}

function requestPermission() {
	if (window.webkitNotifications) {
		window.webkitNotifications.requestPermission();
	} else {
		Notification.requestPermission(function() {
			window.alert('Callback');
		});
	}
}

function hasPermission() {
	var hasPermission = false;

	if (window.webkitNotifications)
		hasPermission = (window.webkitNotifications.checkPermission() == 0);
	else
		hasPermission = (Notification.permissionLevel() == "granted");

	return hasPermission;
}

function notify(title, text) {
	var notification = null;
	if (window.webkitNotifications) {
		notification = window.webkitNotifications.createNotification('', title, text);
	} else {
		notification = new Notification(title, {
			body: text
		});
	}
	notification.show();
}