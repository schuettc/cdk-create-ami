HOMEDIR=/home/ec2-user
yum update -y
yum install net-tools -y
yum install wget -y

TOKEN=`curl -X PUT "http://169.254.169.254/latest/api/token" -H "X-aws-ec2-metadata-token-ttl-seconds: 21600"`
LOCAL_HOSTNAME=$( curl -H "X-aws-ec2-metadata-token: $TOKEN" -v http://169.254.169.254/latest/meta-data/public-hostname )
INSTANCE_ID=$( curl -H "X-aws-ec2-metadata-token: $TOKEN" -v http://169.254.169.254/latest/meta-data/instance-id )

echo $LOCAL_HOSTNAME >> config.txt
echo $INSTANCE_ID >> config.txt