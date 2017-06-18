{% macro panel(title) %}
<div class="panel panel-primary">
    <div class="panel-heading">
        <h3 class="panel-title">{{ title }}</h3>
    </div>
    <div class="panel-body text-center">
        {{ caller() }}
    </div>
</div>
{% endmacro %}

<!DOCTYPE html>
<html>
    <head>
        <meta charset="utf-8">
        <meta name="viewport" content="width=device-width, initial-scale=1">
        <meta name="description" content="Tryton Van Meer's Resume">
        <meta name="author" content="tryton-vanmeer">

        <title>Tryton Van Meer</title>

        <link href="style.css" rel="stylesheet">
    </head>
    <body>
        <div class="container">
            <div class="page-header">
                <div class="row text-center">
                      <h1>{{ name }}</h1>
                </div>
                <div id="summary" class="row text-center">
                    {{ summary }}
                </div>
                <br>
                <div id="info" class="row text-center">
                    <div class="col-md-4 col-sm-4">
                        <i class="icon-location"></i> {{ address }}
                    </div>
                    <div class="col-md-4 col-sm-4">
                        <i class="icon-mobile"></i> {{ phone }}
                    </div>
                    <div class="col-md-4 col-sm-4">
                        <i class="icon-mail"></i> {{ email  | urlize | safe }}
                    </div>
                    <div class="col-md-4 col-sm-4">
                        <i class="icon-link"></i> {{ website | urlize | safe }}
                    </div>
                    <div class="col-md-4 col-sm-4">
                        <i class="icon-github"></i> {{ github | urlize | safe }}
                    </div>
                </div>
            </div>
            <div class="row">
                <h1>Skills</h1>
                {% for catagory, list in skills %}
                    <div class="col-md-4 col-sm-4">
                        {% call panel(catagory) %}
                            {% for skill in list %}
                                <li>{{ skill }}</li>
                            {% endfor %}
                        {% endcall %}
                    </div>
                {% endfor %}
            </div>
            <div class="row">
                <h1>Experience</h1>
                {% for item, desc in experience %}
                    <div class="col-md-4 col-sm-4">
                        {% call panel(item) %}
                            <p>{{ desc | safe }}</p>
                        {% endcall %}
                    </div>
                {% endfor %}
            </div>
            <div class="row">
                <h1>Education</h1>
                {% for school, program in education %}
                    <div class="col-md-4 col-sm-4">
                        {% call panel(school) %}
                            {{ program }}
                        {% endcall %}
                    </div>
                {% endfor %}
            </div>
        </div>
    </body>
</html>
