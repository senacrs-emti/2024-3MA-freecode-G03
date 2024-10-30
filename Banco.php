    <?php
$servername = "localhost";
$username = "root";  // Altere de acordo com seu usuário MySQL
$password = "";      // Altere de acordo com sua senha MySQL
$dbname = "LocalizacoesDB";

// Cria a conexão
$conn = new mysqli($servername, $username, $password, $dbname);

// Verifica a conexão
if ($conn->connect_error) {
    die("Conexão falhou: " . $conn->connect_error);
}

// Consulta para obter os dados de localização
$sql = "SELECT nome_local, latitude, longitude, descricao FROM Localizacoes";
$result = $conn->query($sql);

$locais = array();

if ($result->num_rows > 0) {
    // Armazena os dados em um array
    while ($row = $result->fetch_assoc()) {
        $locais[] = $row;
    }
}

// Retorna os dados em formato JSON
echo json_encode($locais);

$conn->close();
?>

 