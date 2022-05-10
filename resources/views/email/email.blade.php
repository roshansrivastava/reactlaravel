<html>
<head>
    <title>Varification Email</title>
</head>
<body>
    <h1>{{ $details['title'] }}</h1>
    <p>{{ $details['body'] }}</p>
    <button> <a href="{{ $details['url'] }}" > Click Here </button>
    <p>Regards,</p>
    <p>Thank you</p>
    <p>If you're having trouble clicking the "Confirm Account" button,
     copy and paste the URL below into your web browser: {{ $details['url'] }}
</p>
</body>
</html>