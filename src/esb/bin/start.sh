#!/usr/bin/env bash
set -e

envfile="${BK_HOME}/etc/bk_apigateway/bk_apigateway.env"
if [ -f "${envfile}" ]; then
    set -a
    source "${envfile}"
    set +a
fi

command="gunicorn wsgi --env prometheus_multiproc_dir=/tmp/ -k gevent -w 16 -b [::]:${PORT:-6010} --max-requests 10000 --timeout 600 --access-logfile - --error-logfile - --access-logformat '[%(h)s] %({request_id}i)s %(u)s %(t)s \"%(r)s\" %(s)s %(D)s %(b)s \"%(f)s\" \"%(a)s\"'"
exec bash -c "$command"